
require('dotenv').config();
const mysql = require('mysql2'); //library downloaded npm, used to create and interact with mysql database
const http = require('http'); //built in module, used to create a HTTP server
const bcrypt = require('bcryptjs');


//Creates a connection with the database
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//Make connection
con.connect((err) => {
    if (err){
        console.error('Connection to datanbase failed!', err.stack);
        return //stops execution
    } //If err not null throw error
    console.log('Successfully Connected to Database');
})

//Fetch Categories
const fetchSubCaegories = (category,callback) => {
    const query = 'SELECT DISTINCT subcategory FROM products WHERE category= ?';
    const queryParams = [category];
    con.query(query, queryParams, (err, results) => {
        err ? callback(err, null) : callback(null, results);
    })
}

//Fetch uunique Colors
const fetchColors = (category, callback) => {
    const query = 'SELECT colors FROM products WHERE category= ?';
    const queryParams = [category];

    con.query(query, queryParams, (err, results) => {
        err && callback(err, null);

        const uniqueColors = new Set(); //Set contains unique values
        results.forEach(row => row.colors.split(',').forEach(color => uniqueColors.add(color.trim()))); //Adds unique colors to the set

        callback(null, Array.from(uniqueColors));
    })
}

//Fetch bestsellers (top 7)
const fetchBestsellers = (category, callback) => {
    const query = 'SELECT * FROM products JOIN bestsellers ON products.prod_id = bestsellers.prod_id WHERE category= ? ORDER BY bestsellers.quantities_sold DESC LIMIT 7';
    const queryParams = [category];
    con.query(query, queryParams, (err, results) => {
        err ? callback(err, null) : callback(null, results);
    })
}
//Fetch new arrivals
const fetchNewArrivals = (callback) => {
    const query = "SELECT * FROM products WHERE tags LIKE '%new%'";
    con.query(query, (err, results) => {
        err ? callback(err, null) : callback(null, results);
    })
}

//Fetch Products
const fetchProducts = ({category, minprice, maxprice, style, color, promotion, product_name, prod_id}, callback) => {
    let query = 'SELECT * FROM products WHERE category = ?';
    let queryParams = [category];

    if (product_name) {
        query += ' And product_name = ?';
        queryParams.push(product_name);
    }
    if (minprice) {
        query += ' AND price >= ?';
        queryParams.push(minprice);
    }
    if (maxprice) {
        query += ' AND price <= ?';
        queryParams.push(maxprice);
    }
    if (style) {
        query += ' AND subcategory = ?';
        queryParams.push(style);
    }
    if (color) {
        query += ' AND colors LIKE ?';
        queryParams.push(`%${color}%`);
    }
    if (promotion) {
        query += ' AND tags LIKE ?';
        queryParams.push(`%${promotion}%`);
    }
    if(prod_id){
        query += ' AND prod_id = ?';
        queryParams.push(prod_id);

    }

    con.query(query, queryParams, (err, results) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

//fetch wishlist
const fetchWishList = (userId, callback) => {
    const query = 'SELECT p.prod_id, p.product_name, p.price, p.image_link, p.category, w.user_id from products p JOIN wishlist w ON p.prod_id = w.prod_id WHERE w.user_id= ?'
    const queryParams = [userId];

    con.query(query, queryParams, (err, results) => {
        err ? callback(err, null) : callback(null, results);
    })
};







const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Adjust origin if needed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }
    //fetching subcategories
    if (req.url.startsWith('/subcategory') && req.method === 'POST'){
        let data = '';

        //Data gets sent in chunks
        req.on('data', chunk => {
            data += chunk; 
        })

        //when all data is received this will run
        req.on('end', () => {
            fetchSubCaegories(data,(err, results) => {
                if (err) {
                    console.error('Error fetching products:', err);
                    res.writeHead(500, {'Content-Type':'text/plain'})
                    res.end('Error fetching products');
                } else {
                    res.writeHead(200, {'Content-Type': 'application/json'})
                    res.end(JSON.stringify(results));
                }
            })
        })
        
    } else if (req.url.startsWith('/colors') && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {
            fetchColors(data, (err, results) => {
                if (err) {
                    console.error('error in fetching unique colors');
                    res.writeHead(500, {'content-type':'text/plain'});
                    res.end('error in fetching unique colors');

                } else{
                    res.writeHead(200, {'content-type':'application/json'})
                    res.end(JSON.stringify(results));
                }
           })
        })
    } else if (req.url.startsWith('/products') && req.method === 'POST') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {
            const requestData = JSON.parse(data);
            fetchProducts(requestData, (err, results) => {
                if (err) {
                    console.error('error in fetching products');
                    res.writeHead(500, {'content-type' : 'text/plain'});
                    res.end('Error in fetching products');
                } else {
                    res.writeHead(200, {'content-type' : 'application/json'});
                    res.end(JSON.stringify(results));
                }
            })
        })
    } 
    else if (req.url.startsWith('/bestsellers') && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => 
            data += chunk
        )

        req.on('end', () => {
            fetchBestsellers(data, (err, results) =>{
                if (err) {
                    console.error('error in fetching bestsellers');
                    res.writeHead(500, {'content-type' : 'text/plain'});
                    res.end('error in fetching bestsellers');
                } else{
                    res.writeHead(200, {'content-type' : 'application/json'});
                    res.end(JSON.stringify(results));
                }
            })
        })
    }
    else if (req.url.startsWith('/subscribe') && req.method === 'POST'){
        let data = '';

        req.on('data', chunk => 
            data += chunk
        )
        
        req.on('end', () => {
            const email = JSON.parse(data);
            const query ='INSERT INTO newsletter_subscribers (email) VALUES (?)';
            const queryParams = email;
            con.query(query, queryParams, (err) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Subscription Failed!')
                } else {
                    res.writeHead(200);
                    res.end('Successfully Subscribed!');
                }
            })
        })
    }
    else if (req.url.startsWith('/signup') && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => 
            data += chunk
        )

        req.on('end', () => {
            const {fullname, username, email, password} = JSON.parse(data);
            const query = 'INSERT INTO users (full_name, username, email, password_hash) VALUES (?, ?, ?, ?)';
            bcrypt.hash(password, 10, (err, hash) => {
                if (err){
                    console.error('error in bcrypt');
                } else {
                    const queryParams = [fullname, username, email, hash];
                    con.query(query, queryParams, (err) => {
                        if (err) {
                            res.writeHead(500,{ 'content-type': 'text/plain'});
                            res.end('Error in creating new user!');
                        }else{
                            res.writeHead(200, {'content-type': 'text/plain'});
                            res.end('New user successfully created!');
                        }
                    })
                }
            })


        })
    } else if(req.url.startsWith('/login') && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => 
            data += chunk
        )

        req.on('end', () => {
            const {username, password} = JSON.parse(data);
            const query = "SELECT user_id, username, password_hash FROM users WHERE username = ?";
            const queryParams = [username];
            con.query(query, queryParams, (err, results) => {
                if (err || results.length === 0) {
                    res.writeHead('404', {'content-type': 'text/plain'});
                    res.end('Not Found');
                } else{
                    
                    const user = results[0];
                    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
                        if (err || !isMatch){
                            res.writeHead(401, {'content-type': 'text/plain'});
                            res.end('Invalid credentials');
                        } else{
                            
                            res.writeHead(200, {'content-type':'application/json'});
                            res.end(JSON.stringify({ username: user.username, userId : user.user_id}));
                        }
                    })
                }
            })
        })
    }
    else if (req.url.startsWith('/newArrivals') && req.method === 'POST'){

        
            fetchNewArrivals((err, results) =>{
                if (err) {
                    console.error('error in fetching new arrivals');
                    res.writeHead(500, {'content-type' : 'text/plain'});
                    res.end('error in fetching new arrivals');
                } else{
                    res.writeHead(200, {'content-type' : 'application/json'});
                    res.end(JSON.stringify(results));
                }
            })
        
    }
    else if (req.url.startsWith('/wishlist') && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => data += chunk);

        req.on('end', () => {
            const {userId, prodId, action} = JSON.parse(data);
            if (action === 'fetch'){
                fetchWishList(userId, (err, results) => {
                    if (err){
                        res.writeHead(500, {'content-type': 'text/plain'});
                        res.end('Error in fetching wishlist items')
                    } else{
                        if (results.length === 0){
                            res.writeHead(404, {'content-type': 'text/plain'});
                            res.end('Not Found');
                        }else{
                            res.writeHead(200, {'content-type': 'application/json'});
                            res.end(JSON.stringify(results));
                        }
                    }
                } )
            } else if (action === 'insert'){
                const query = 'INSERT into wishlist (user_id, prod_id) VALUES (?, ?)';
                const queryParams = [userId, prodId];

                con.query(query, queryParams, (err) => {
                    if (err){
                        res.writeHead(500, {'content-type' : 'text/plain'});
                        res.end('Error in adding product to wishlist');
                    } else{
                        res.writeHead(200, {'content-type':'text/plain'});
                        res.end('Product successfully added to wishlist');
                    }
                })
            }
             else if (action === 'delete'){
                const query = 'DELETE FROM wishlist WHERE user_id = ?  AND prod_id = ?';
                const queryParams = [userId, prodId];

                con.query(query, queryParams, (err) => {
                    if (err){
                        res.writeHead(500, {'content-type' : 'text/plain'});
                        res.end('Error in deleting product to wishlist');
                    } else{
                        res.writeHead(200, {'content-type':'text/plain'});
                        res.end('Product successfully deleted from wishlist');
                    }
                })
            } else if (action === 'wishlist'){
                const query = 'SELECT prod_id from wishlist WHERE user_id= ?';
                const queryParams = [userId];

                con.query(query, queryParams, (err, results) => {
                    if (err) {
                        res.writeHead(500, {'content-type':'text/plain'});
                        res.end('Error fetching list of wishlist');

                    } else{
                        res.writeHead(200, {'content-type' : 'application/json'});
                        res.end(JSON.stringify(results));
                    }
                })
            }
        })
    }
    else if(req.url.startsWith('/cart') && req.method === 'POST'){
        let data = '';
        req.on('data', chunk => data += chunk);

        req.on('end', () => {
            const {userId, prodId, color, quantity, action} = JSON.parse(data);
            if (action === 'insert') {
                // Start building the query
                let query = 'INSERT INTO cart (user_id, prod_id';
                let queryParams = [userId, prodId];
        
                // Conditionally add fields if they are not null or undefined
                if (color !== null && color !== undefined) {
                    query += ', color';
                    queryParams.push(color);
                }
        
                if (quantity !== null && quantity !== undefined) {
                    query += ', quantity';
                    queryParams.push(quantity);
                }
        
                // Complete the query for values
                query += ') VALUES (?, ?';
                if (color !== null && color !== undefined) query += ', ?';
                if (quantity !== null && quantity !== undefined) query += ', ?';
                query += ')';
        
                // Execute the query
                con.query(query, queryParams, (err) => {
                    if (err) {
                        res.writeHead(500, { 'content-type': 'text/plain' });
                        res.end('Error in inserting product to cart');
                    } else {
                        res.writeHead(200, { 'content-type': 'text/plain' });
                        res.end('Success in adding product to cart');
                    }
                });
            } else if (action === 'delete'){
                let query = 'DELETE FROM cart WHERE user_id= ? AND prod_id= ?';
                const queryParams = [userId, prodId];

                con.query(query, queryParams, (err) => {
                    if (err){
                        res.writeHead(500, {'content-type':'text/plain'});
                        res.end('Error in deleting product from cart');
                    } else{
                        res.writeHead(200, {'content-type':'text/plain'});
                        res.end('Success in deleting product from cart');
                    }
                })
            } else if (action === 'fetch'){
                let query = 'SELECT p.product_name, p.prod_id, p.price, p.image_link, c.color, c.quantity from products p JOIN cart c ON p.prod_id = c.prod_id WHERE c.user_id = ?';
                const queryParams = [userId];

                con.query(query, queryParams, (err, results) => {
                    if (err){
                        res.writeHead(500, {'content-type':'text/plain'});
                        res.end('Error in fetching products from cart');
                    } else{
                        res.writeHead(200, {'content-type':'application/json'});
                        res.end(JSON.stringify(results));
                    }
                })
            } else if(action === 'cartlist'){
                let query = 'SELECT prod_id FROM cart WHERE user_id = ?';
                const queryParams = [userId,];

                con.query(query, queryParams, (err, results) => {
                    if (err){
                        res.writeHead(500, {'content-type':'text/plain'});
                        res.end('Error in fetching cartlist from cart');
                    } else{
                        res.writeHead(200, {'content-type':'application/json'});
                        res.end(JSON.stringify(results));
                    }
                })
            }
        })
    } else if (req.url.startsWith('/search') && req.method === 'POST'){
        let data = '';

        req.on('data', chunk => data += chunk);

        req.on('end', () => {
            const query = 'SELECT * FROM products WHERE product_name LIKE ? OR tags LIKE ? OR description LIKE ?';
            const queryParams = [`%${data}%`, `%${data}%`, `%${data}%`];

            con.query(query, queryParams, (err, results) => {
                if (err){
                    res.writeHead(500, {'content-type':'text/plain'});
                    res.end('Error in fetching products based on search results');
                } else {
                    if(results.length === 0){
                        res.writeHead(404, {'content-type':'text/plain'});
                        res.end('Not found');
                    }else{
                        res.writeHead(200, {'content-type': 'application/json'});
                        res.end(JSON.stringify(results));
                    }
                    
                }
            })
        })
    }
    
    else{
        res.writeHead(404, {'content-type':'text/plain'});
        res.end('Not Found');
    }
})


// Start the server on port 3001
server.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
  });

