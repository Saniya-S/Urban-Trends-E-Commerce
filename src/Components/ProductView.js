import { useParams, Link } from "react-router-dom";
import './product-view.css';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartArrowDown, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './Context/AuthenticationContext';

const ProductView = () => {
    const { id, category, productName } = useParams();
    const [individualProduct, setIndividualProduct] = useState({});
    const { userId, isAuthenticated, wishlist, addToWishlist, removeFromWishlist } = useContext(AuthContext);
    const [changeColor, setChangeColor] = useState(false);
    const [message, setMessage] = useState('');

    // Fetch selected product details when component loads
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

    // Check if the product is in the wishlist
    useEffect(() => {
        const productId = Number(id);
        const isInWishlist = wishlist.some((item) => Number(item.prod_id) === productId);
        setChangeColor(isInWishlist);
    }, [id, wishlist]);

    // Toggle wishlist status on button click
    const handleWishlist = () => {
        if (isAuthenticated) {
            const action = changeColor ? 'delete' : 'insert';
            setChangeColor(!changeColor);

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
                    console.log(`Wishlist ${action} success`);
                    if (action === 'insert') {
                        addToWishlist(id); // Update wishlist in context for UI update
                    } else {
                        removeFromWishlist(id); // Remove from wishlist in context
                    }
                } else {
                    console.error('Error in wishlist request:', response.status);
                    setChangeColor(!changeColor); // Revert color if request fails
                }
            })
            .catch(error => {
                console.error('Error in wishlist request:', error);
                setChangeColor(!changeColor); // Revert color if fetch fails
            });
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
