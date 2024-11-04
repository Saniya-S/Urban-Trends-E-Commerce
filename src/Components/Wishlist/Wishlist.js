import { AuthContext } from "../Context/AuthenticationContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import '../Catogories/category.css';

const WishList = () => {
    const navigate = useNavigate();
    const {isAuthenticated,  userId} = useContext(AuthContext);
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate])

    useEffect(() => {
        if(isAuthenticated){
            fetch('http://localhost:3001/wishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId :  userId, action: 'fetch' })
            }).then(response => {
                if (!response.ok) {
                    if(response.status === 404){
                        setMessage('No products in wishlist!');
                    }else {
                        console.error('HTTP Error status', response.status);
                    }
                   
                } else {
                    return response.json();
                }
            }).then(data => {
                
                
                setWishlistProducts(data);
            })
            .catch(err => console.error('Fetch error:', err));
        }
    }, [isAuthenticated, userId]);

    if (!isAuthenticated) {
        return null; // Prevents rendering content while redirecting
        
    }

    return(
        <div>
            <h1>Wishlist</h1>
            <h4 style={{margin: '10px'}}>{message}</h4>
            <div className="category-view-container">
                <div className="category-box">
                    {wishlistProducts && wishlistProducts.map((product) => 
                        <div style={{flexBasis: '33.33%'}}>
                        <ProductCard item={product} minWidth={'33.33%'}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WishList;