import { AuthContext } from "../Context/AuthenticationContext";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Catogories/category.css';

const WishList = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthContext);
    
    useEffect(() => {
        if(!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate])


    if (!isAuthenticated) {
        return null; // Prevents rendering content while redirecting
    }

    return(
        <div>
            <h1>Wishlist</h1>
            <div className="category-view-container">
                <div className="category-box">
                    {/* {categoryProduct && categoryProduct.map((product) => 
                        <div style={{flexBasis: '33.33%'}}>
                        <ProductCard item={product} minWidth={'33.33%'}/>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    )
}

export default WishList;