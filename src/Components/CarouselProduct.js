import {useState} from 'react';

//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft, faCartArrowDown, faHeart } from '@fortawesome/free-solid-svg-icons';

//CSS
import './carousel-product.css';


  

const CarouselProduct = (props) => {
    const {productList} = props;
    const [currentIndex, setCurrentIndex] = useState(0);

    //handle next
    const handleNext = () => {
        setCurrentIndex(currentIndex === (productList.length - 1) ? 0 : currentIndex + 1)
    }

    //handle prev
    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? (productList.length - 1) : currentIndex - 1)
    }
    return(
        <div className='carousel-product-container'>
            <FontAwesomeIcon onClick={handlePrev} className='prev-icon icon' icon={faCircleChevronLeft} />
            <FontAwesomeIcon onClick={handleNext} className='next-icon icon' icon={faCircleChevronRight} />
            <div className="product-track" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {productList && productList.map((item) => 
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
            )}
            </div>

        </div>
    )
}

export default CarouselProduct;