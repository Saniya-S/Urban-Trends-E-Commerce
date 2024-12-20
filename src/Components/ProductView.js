import { useParams, Link } from "react-router-dom";
import './product-view.css';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartArrowDown, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from './Context/AuthenticationContext';

const ProductView = () => {
    const { id, category, productName } = useParams();
    const [individualProduct, setIndividualProduct] = useState({});
    const { userId, isAuthenticated, wishlist, addToWishlist, removeFromWishlist, addToCartList, removeFromCartList , cartList } = useContext(AuthContext);
    const [changeColor, setChangeColor] = useState(false);
    const [message, setMessage] = useState('');

    //cart variables
    const [selectedColor, setSelectedColor] = useState(null);
    const [changeCartColor, setChangeCartColor] = useState(false);
    const [cartMessage, setCartMessage] = useState('');

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

    // Check if the product is in the cartlist
    useEffect(() => {
        const productId = Number(id);
        const isInCartlist = cartList.some((item) => Number(item.prod_id) === productId);
        setChangeCartColor(isInCartlist);
    }, [id, cartList]);

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


    //handleCart
    const handleCart = () => {
        if (isAuthenticated){
            const action = changeCartColor ? 'delete' : 'insert';
            setChangeCartColor(!changeCartColor);

            fetch('http://localhost:3001/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    prodId: id,
                    color: selectedColor,
                    quantity: null,
                    action: action
                })
            })
            .then(response => {
                if (response.ok) {
                    if (action === 'insert') {
                        addToCartList(id); // Update Cartlist in context for UI update
                    } else {
                        removeFromCartList (id); // Remove from Cartlist in context
                    }
                } else {
                    console.error('Error in wishlist request:', response.status);
                    setChangeCartColor(!changeCartColor); // Revert color if request fails
                }
            })
            .catch(error => {
                console.error('Error in wishlist request:', error);
                setChangeCartColor(!changeCartColor); // Revert color if fetch fails
            });
        } else{
            setCartMessage('Please Login to add to cart.')
        }
    }
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
                        <form>
                        <h3>Colors Available:</h3>
                        <div>
                            {individualProduct.colors && individualProduct.colors.split(',').map((color) => 
                                <div key={color}>
                                    <input type="radio" name="color" value={color} checked={selectedColor === color} onChange={() => setSelectedColor(color)} /> 
                                    <label>{color}</label>
                                </div>
                            )}
                        </div>
                        </form>
                    </div>

                    {/* Buttons */}
                    <div className="btn-container">
                        <div>
                            <button onClick={handleWishlist} >
                                Wishlist <FontAwesomeIcon style={{ color: changeColor && isAuthenticated ? '#ff746c' : 'white' }} icon={faHeart} />
                            </button>
                        </div>
                        <div>
                            <button onClick={handleCart}>Cart <FontAwesomeIcon icon={faCartArrowDown} style={{ color: changeCartColor && isAuthenticated ? 'green' : 'white' }} /></button>
                        </div>
                    </div>
                    <div className='wishlist-message'>{message}</div>
                    <div className='wishlist-message'>{cartMessage}</div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
