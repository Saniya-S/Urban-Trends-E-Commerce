import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthenticationContext';
import './product-card.css';

const ProductCard = (props) => {
    const { item, flexbasis, minWidth } = props;
    const { userId, isAuthenticated, wishlist, addToWishlist, removeFromWishlist } = useContext(AuthContext);
    const [changeColor, setChangeColor] = useState(false);
    const [message, setMessage] = useState('');

    // Check if the item is in the wishlist when the component loads
    useEffect(() => {
        const isInWishlist = wishlist.some((list) => Number(list.prod_id) === Number(item.prod_id));
        setChangeColor(isInWishlist);
    }, [item.prod_id, wishlist]);

    // Toggle wishlist status on button click
    const handleWishlist = () => {
        if (!isAuthenticated) {
            setMessage('Please login to add to wishlist');
            return;
        }

        const action = changeColor ? 'delete' : 'insert';
        setChangeColor(!changeColor);

        fetch('http://localhost:3001/wishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, prodId: item.prod_id, action })
        })
        .then(response => {
            if (!response.ok) {
                console.error('HTTP Error status', response.status);
                setChangeColor(!changeColor); // Revert color change if request fails
            } else {
                console.log(`Wishlist ${action} success`);
                if (action === 'insert') {
                    addToWishlist(item.prod_id);  // Update wishlist in context
                } else {
                    removeFromWishlist(item.prod_id); // Remove from wishlist in context
                }
            }
        })
        .catch(err => {
            console.error('Fetch error:', err);
            setChangeColor(!changeColor); // Revert color change if request fails
        });
    };

    return (
        <>
            <Link to={`/${item.category}/${item.prod_id}/${item.product_name}`}>
                <div className='product-container' key={item.prod_id} style={{ flexBasis: flexbasis, minWidth: minWidth }}>
                    <div className='product-image' style={{ backgroundImage: `url(${item.image_link})` }}></div>
                    <h3>{item.product_name}</h3>
                    <h4>AED {item.price}</h4>
                </div>
            </Link>

            <div className='product-choice-box'>
                <div className='product-choice'>
                    <div>
                        <FontAwesomeIcon 
                            className='add-icon heart' 
                            icon={faHeart} 
                            onClick={handleWishlist} 
                            style={{ color: changeColor && isAuthenticated ? '#ff746c' : 'white' }} 
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon className='add-icon' icon={faCartArrowDown} />
                    </div>
                </div>
            </div>
            <div className='wishlist-message'>{message}</div>
        </>
    );
};

export default ProductCard;
