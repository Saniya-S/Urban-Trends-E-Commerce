import { useParams, Link } from "react-router-dom";
import './product-view.css';
import { useState, useEffect, useContext } from 'react';
// Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartArrowDown, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './Context/AuthenticationContext';

const ProductView = () => {
    const { id, category, productName } = useParams();
    const [individualProduct, setIndividualProduct] = useState({});
    const { userId, isAuthenticated, wishlist } = useContext(AuthContext);
    const [changeColor, setChangeColor] = useState(false);
    const [message, setMessage] = useState('');

    // Request to fetch selected product
    useEffect(() => {
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                category: category,
                minprice: null,
                maxprice: null,
                style: null,
                color: null,
                promotion: null,
                product_name: productName,
                prod_id: id
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('view', data);
            setIndividualProduct(data[0]);
        })
        .catch(error => console.error('Error in fetching selected products:', error));
    }, [category, productName, id]);

    // Check if the product is in the wishlist when the component loads
    useEffect(() => {
        const productId = Number(id);
        const isInWishlist = wishlist.some((item) => item.prod_id === productId);
        console.log(isInWishlist);
        console.log('wishlist', wishlist);
        console.log('id', id);
        setChangeColor(isInWishlist);
    }, [id, wishlist]);

    // Toggle wishlist status
    const handleWishlist = () => {
        if (isAuthenticated) {
            const action = changeColor ? 'insert' : 'delete';
            fetch('http://localhost:3001/wishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    prodId: id,
                    action: action
                })
            })
            .then(response => {
                if (response.ok) {
                    setChangeColor(!changeColor);
                } else {
                    console.error('Error in wishlist request:', response.status);
                }
            })
            .catch(error => console.error('Error in wishlist request:', error));
        } else {
            setMessage('Please login to add to wishlist');
        }
    };

    return (
        <div style={{ height: '100%' }}>
            <div className="path">
                <Link to={`/${category}`}>
                    <FontAwesomeIcon className='icon back-icon' icon={faCircleLeft} />
                </Link>
                <p>{category} &lt; {individualProduct.subcategory} &lt; {productName}</p>
            </div>

            <div>
                <h1>{individualProduct.product_name}</h1>
            </div>
            <div className="product-view-container">
                <div className="image-container">
                    <img src={individualProduct.image_link} alt="" />
                </div>
                
                <div className="details-container">
                    <div>
                        <h2>AED {individualProduct.price}</h2>
                    </div>
                    <div>
                        <p>{individualProduct.description}</p>
                    </div>
                    <div>
                        <h3>Colors Available:</h3>
                        <div>
                            {individualProduct.colors && individualProduct.colors.split(',').map((color) => 
                                <div key={color}>
                                    <input type="checkbox" value={color} /> 
                                    <label>{color}</label>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="btn-container">
                        <div>
                            <button onClick={handleWishlist} >
                                Wishlist <FontAwesomeIcon style={{ color: changeColor && isAuthenticated ? '#ff746c' : 'white' }} icon={faHeart} />
                            </button>
                        </div>
                        <div>
                            <button>Cart <FontAwesomeIcon icon={faCartArrowDown} /></button>
                        </div>
                    </div>
                    <div className='wishlist-message'>{message}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
