import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthenticationContext';
import './product-card.css';

const ProductCard = (props) => {
    const { item, flexbasis, minWidth } = props;
    const { userId, isAuthenticated, wishlist } = useContext(AuthContext);
    const [changeColor, setChangeColor] = useState(false);
    const [message, setMessage] = useState('');

    // Check if the item is in the wishlist when the component loads
    useEffect(() => {
        const isInWishlist = wishlist.some((list) => list.prod_id === item.prod_id);
        setChangeColor(isInWishlist);
    }, [item.prod_id, wishlist]);

    // Update the wishlist based on `changeColor` status
    useEffect(() => {
        if (!isAuthenticated || changeColor === undefined) return;

        const action = changeColor ? 'insert' : 'delete';
        fetch('http://localhost:3001/wishlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, prodId: item.prod_id, action })
        }).then(response => {
            if (!response.ok) {
                console.error('HTTP Error status', response.status);
            } else {
                console.log(`Wishlist ${action} success`);
            }
        }).catch(err => console.error('Fetch error:', err));
    }, [changeColor, isAuthenticated, userId, item.prod_id]);

    // Toggle wishlist status on button click
    const handleWishlist = () => {
        if (isAuthenticated) {
            setChangeColor(!changeColor);
        } else {
            setMessage('Please login to add to wishlist');
        }
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
                        <FontAwesomeIcon className='add-icon heart' icon={faHeart} onClick={handleWishlist} style={{ color: changeColor && isAuthenticated ? '#ff746c' : 'white' }} />
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
