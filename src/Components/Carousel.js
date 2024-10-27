import {useState, useEffect} from 'react';

//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

//CSS
import './carousel.css'


const Carousel = (props) => {
    const {displayDots, images, height, size} = props;
    
    //State Variables
    const [currentIndex, setCurrentIndex] = useState(0);
    
    //Auto Play
    useEffect(() => {
        const autoPlay = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        }, 4000);

        return () => clearInterval(autoPlay);
    }, [images.length])

    
    
    //Goes to the next image in the array. if the array index is at the last element, sets the index to the beginning of the array
    const handleNext = () => {
        setCurrentIndex(currentIndex === (images.length - 1) ? 0 : currentIndex + 1)
    }

    //goes to the prev image in the array. If the array index is at the first element, sets the index to the last element of the array
    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? (images.length - 1) : currentIndex - 1)
    }

     
    return (
        <div>
            
            <div className= {`content`} style={{backgroundImage: `url(${images[currentIndex]})`, height: height, backgroundSize: size}}>
                <div className='box'>
                    <div className="buttons-container">
                        <div>
                        {/* Prev */}
                        <button onClick={handlePrev}> <FontAwesomeIcon className='next-prev-icon' icon={faCircleChevronLeft} /></button>
                        </div>
                    <div>
                        {/* Next */}
                    <button onClick={handleNext}><FontAwesomeIcon className='next-prev-icon' icon={faCircleChevronRight} /></button>
                    </div>
                    
                   

                    </div>
                     {/* Dots Indicator */}
                     <div style={{display: displayDots ? 'inline-block' : 'none'}}>
                        {images.map((_, index) => 
                            <button onClick={() => setCurrentIndex(index)} key={index} className={index === currentIndex ? 'dot active' : 'dot' } >

                            </button>
                        )}
                    </div>
                </div>

                

            
            </div>
            

        </div>
    )
}

export default Carousel;