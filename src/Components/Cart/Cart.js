import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Context/AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import './cart.css';

// Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { isAuthenticated, userId, removeFromCartList } = useContext(AuthContext);
    const [cartProducts, setCartProducts] = useState([]);
    

    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login')
        }else{
            return;
        }
    }, [isAuthenticated, navigate])
    
    useEffect(() => {
        if (isAuthenticated) {
            fetch('http://localhost:3001/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: userId, action: 'fetch' })
            })
            .then(response => response.ok ? response.json() : Promise.reject(response.status))
            .then(data => setCartProducts(data))
            .catch(err => console.error('Fetch error:', err));
        }
    }, [isAuthenticated, userId,]);

    const handleDelete = (prodId) => {
        if (isAuthenticated) {
            fetch('http://localhost:3001/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    prodId: prodId,
                    color: null,
                    quantity: null,
                    action: 'delete'
                })
            })
            .then(response => {
                if (response.ok) {
                    removeFromCartList(prodId); // Update cart in context
                    setCartProducts(prev => prev.filter(item => item.prod_id !== prodId)); 
                    
                } else {
                    console.error('Error in delete request:', response.status);
                }
            })
            .catch(error => {
                console.error('Error in delete request:', error);
            });
        } 
    };
    

    // Calculate total price and total items for order summary
    const totalItems = cartProducts.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h1>Cart</h1>
                <p>&#40;{totalItems} items&#41;</p>
            </div>

            <div className="product-info">
                {cartProducts.map((item) => (
                    <div className="cart-box" key={item.prodd_id}>
                        <div className="img-box">
                            <img className="cart-img" src={item.image_link} alt={item.product_name} />
                        </div>
                        <div className="cart-details">
                            <h1>{item.product_name}</h1>
                            <h3>AED {item.price}</h3>
                            <p>Color: {item.color}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                        <div className="trash-box">
                            <FontAwesomeIcon className="trash-icon" onClick={() => handleDelete(item.prod_id)} icon={faTrashCan} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary Box */}
            <div className="order-summary">
                <h2>Order Summary</h2>
                <p>Total Items: {totalItems}</p>
                <p>Total Price: AED {totalPrice.toFixed(2)}</p>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
