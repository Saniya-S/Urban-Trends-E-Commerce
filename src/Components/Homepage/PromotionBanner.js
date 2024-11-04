import Carousel from "../Carousel";
import promotion1 from '../../Assets/1.png';
import promotion2 from '../../Assets/2.png';
import promotion3 from '../../Assets/3.png';
import promotion4 from '../../Assets/4.png';
import promotion5 from '../../Assets/5.png';
import promotion6 from '../../Assets/6.png';
import promotion7 from '../../Assets/7.png';
import promotion8 from '../../Assets/8.png';
import promotion9 from '../../Assets/9.png';
import promotion10 from '../../Assets/10.png';

const images = [
    promotion1,
    promotion2,
    promotion3,
    promotion4,
    promotion5,
    promotion6,
    promotion7,
    promotion8,
    promotion9,
    promotion10
    
  ];
const PromotionBanner = () => {
    return (
        <div>
            <Carousel displayDots={true} images={images} height={'300px'} size={'contain'}/>
        </div>
    )
}

export default PromotionBanner;