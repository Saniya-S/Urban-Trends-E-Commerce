//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import './product-card.css';




const ProductCard = (props) => {
    const {item} = props;
    return(
        <div className='product-container' key={item.index}>
                    <div className='product-image product-choice'style={{backgroundImage: `url(${item.imagelink})`}}>
                    <div>
                        <FontAwesomeIcon className='add-icon heart' icon={faHeart} />
                        </div>
                        <div>
                            <FontAwesomeIcon className='add-icon'icon={faCartArrowDown} />
                        </div>
                        
                    </div>
                    <h3>{item.productname}</h3>
                    <h4>{item.price}</h4>
                </div>
    )
}

export default ProductCard;