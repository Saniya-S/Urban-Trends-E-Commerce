
const con = require('./server.js');


const fetchSubCategories = (category, callback) => {
    const query = 'SELECT DISTINCT subcategory FROM products where category = ?';
    const queryParams = [category];

    con.query(query, queryParams, (err, results) =>{
        err ? callback(err, null) : callback(null, results);
    })
}

module.exports = { fetchSubCategories };