import {useState} from 'react';
import ProductCard from './ProductCard';

//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons';

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
            <div className="product-track" style={{ transform: `translateX(-${currentIndex * 23}%)` }}>
            {productList && productList.map((item) =>
                <div style={{flexBasis: '23%', flexShrink: '0'}}> 
                <ProductCard item={item} flexbasis={'33.33%'} minWidth={'23%'}/>
                </div>
            )}
            </div>

        </div>
    )
}

export default CarouselProduct;