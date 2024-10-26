import '../category.css';
import Carousel from '../../Carousel';
import promotion1 from '../../../Assets/1.png';
import promotion2 from '../../../Assets/2.png';
import promotion3 from '../../../Assets/3.png';

const images = [
    promotion1,
    promotion2,
    promotion3,
    
  ];
const Kids = () => {
    return (
        <div>
            <div className="category-heading">
                <h1>Kids</h1>
            </div>
            <div className='cat-banner'>
                <Carousel displayDots={true} images={images} height={'400px'} size={'cover'} />
            </div>
        </div>
    )
}

export default Kids; 