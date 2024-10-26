import Carousel from "../Carousel";
import promotion1 from '../../Assets/1.png';
import promotion2 from '../../Assets/2.png';
import promotion3 from '../../Assets/3.png';

const images = [
    promotion1,
    promotion2,
    promotion3,
    
  ];
const PromotionBanner = () => {
    return (
        <div>
            <Carousel displayDots={true} images={images} height={'300px'} size={'contain'}/>
        </div>
    )
}

export default PromotionBanner;