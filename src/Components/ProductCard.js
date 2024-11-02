import {Link} from 'react-router-dom';
//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthenticationContext';
import './product-card.css';




const ProductCard = (props) => {
    const {item, flexbasis, minWidth} = props;
    const { userId, isAuthenticated, wishlist } = useContext(AuthContext);
    const [changeColor, setChangeColor] = useState(false);
    const [lastAction, setLastAction] = useState(null);
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('');

    useEffect(() => {

        if (isAuthenticated){if (counter === 0){
            return;
        } else if (counter % 2 === 0){
            console.log('delete');
        }else{
            console.log('insert');
            fetch('http://localhost:3001/wishlist', {
                method: 'Post',
                body: JSON.stringify({
                    userId : userId,
                    prodId : item.prod_id,
                    action : 'insert'
                })
            }).then(response => {
                if (!response.ok){
                    console.error('http error status', response.status);
                } else{
                    console.log('success');
                }
            })
        }}else {
            
            return;
        }
        
    }, [counter, userId, item.prod_id, isAuthenticated])

    useEffect(() => {
        setChangeColor(wishlist.some((list) => list.prod_id === item.prod_id));
    }, [setChangeColor, item.prod_id, wishlist])

    
    // Toggle wishlist status
    const handleWishlist = () => {
        if(isAuthenticated){
            setChangeColor(!changeColor);
        setCounter((counter) => counter += 1);
        }
        setMessage('Please login to add to wishlist')
        
    };

    return(
        <>
        <Link to={`/${item.category}/${item.prod_id}/${item.product_name}`} >
        <div className='product-container' key={item.prod_id} style={{flexBasis: flexbasis, minWidth: minWidth}}>
                    <div className='product-image 'style={{backgroundImage: `url(${item.image_link})`}}>
                           
                    </div>
                    
                    
                    <h3>{item.product_name}</h3>
                    <h4>AED {item.price}</h4>
                </div>

                </Link>

            <div className='product-choice-box'>
            <div className='product-choice'>
            <div>
                <FontAwesomeIcon className='add-icon heart' icon={faHeart} onClick={handleWishlist} style={{color: changeColor ? '#ff746c' : 'white'}}/>
                </div>
                <div>
                    <FontAwesomeIcon className='add-icon'icon={faCartArrowDown} />
                </div>
            </div>
            </div>
            <div className='wishlist-message'>
                {message}
            </div>
            
            </>
    )
}

export default ProductCard;