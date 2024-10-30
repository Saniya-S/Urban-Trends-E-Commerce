import './footer.css';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Footer = () => {
    const [kidsCategories, setKidsCategories] = useState([]);
    const [womenCategories, setWomenCategories] = useState([]);
    const [menCategories, setMenCategories] = useState([]);
    const [accessoriesCategories, setAccessoriesCategories] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        //kids
        fetch('http://localhost:3001/subcategory', {
          method: 'POST',
          body: 'kids'
        })
        .then(response => {
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response if status is OK
        })
        .then(data => {
            // console.log('fetched categories:', data);
            setKidsCategories(data);
            
        })
        .catch(error => console.error('Error fetching subcategories:', error)); // Handle any errors
        
        //Women
        fetch('http://localhost:3001/subcategory', {
          method: 'POST',
          body: 'Women'
        })
        .then(response => {
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response if status is OK
        })
        .then(data => {
            // console.log('fetched categories:', data);
            setWomenCategories(data);
            
        })
        .catch(error => console.error('Error fetching subcategories:', error)); // Handle any errors
        
        //Men
        fetch('http://localhost:3001/subcategory', {
          method: 'POST',
          body: 'Men'
        })
        .then(response => {
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response if status is OK
        })
        .then(data => {
            // console.log('fetched categories:', data);
            setMenCategories(data);
            
        })
        .catch(error => console.error('Error fetching subcategories:', error)); // Handle any errors
        
        //Accessories
        fetch('http://localhost:3001/subcategory', {
          method: 'POST',
          body: 'Accessories'
        })
        .then(response => {
            // Check if response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Parse the JSON response if status is OK
        })
        .then(data => {
            // console.log('fetched categories:', data);
            console.log(data);
            setAccessoriesCategories(data);
            
        })
        .catch(error => console.error('Error fetching subcategories:', error)); // Handle any errors


    }, []);

    //handle change 
    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if(email !== '') {
            fetch('http://localhost:3001/subscribe', {
                method: 'POST',
                body: JSON.stringify(email)
            }).then(response => {
                if (!response.ok){
                    setMessage('Error in subscribing...Try again.')
                    
                } else{
                    setMessage('Subscription successful!');
                    setEmail('');
                }
            }).catch(error => {
                console.error('error in subscribing', error);
            })
        } else{
            setMessage('Enter your email!')
        }
    }

    return(
        <div className='footer-container'>
            <div>
                <div className='newsletter'>
                <div className='newsletter-heading'>
                    <h3>Subscribe to our newsletter!</h3>
                </div>
                <div>
                <label className='newsletter-lable'>Enter your Email</label>
                    <input type='email' value={email} onChange={handleChange} className='newsletter-input' />
                  <button type='submit' onClick={handleSubmit} className='newsletter-submit'>Submit</button>  
                </div>
                <div>
                    <p>{message}</p>
                </div>
                </div>
                
                
               <div className='quick-links'>
                <div className='quick-link-box'>
                    <h3>Kids</h3>
                    <div>
                        {kidsCategories && kidsCategories.map((category) => 
                            <div>
                            <Link to={`/kids/${category.subcategory}`}>
                                {category.subcategory}
                            </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='quick-link-box'>
                    <h3>Women</h3>
                    <div>
                        {womenCategories && womenCategories.map((category) => 
                            <div>
                            <Link to={`/women/${category.subcategory}`}>
                                {category.subcategory}
                            </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='quick-link-box'>
                    <h3>Men</h3>
                    <div>
                        {menCategories && menCategories.map((category) => 
                            <div>
                            <Link to={`/men/${category.subcategory}`}>
                                {category.subcategory}
                            </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className='quick-link-box'>
                    <h3>Accessories</h3>
                    <div>
                        {accessoriesCategories && accessoriesCategories.map((category) => 
                            <div>
                            <Link to={`/accessories/${category.subcategory}`}>
                                {category.subcategory}
                            </Link>
                            </div>
                        )}
                    </div>
                </div>
               </div>

               <div className='copyright'>
                <div>
                    <p>&copy; 2024 URBAN TRENDS, ALL RIGHTS RESERVED</p>
                </div>
               </div>
            </div>
        </div>
    )
}

export default Footer;