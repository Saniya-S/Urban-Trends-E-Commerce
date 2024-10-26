import '../category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire} from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../Carousel';
import CarouselProduct from '../../CarouselProduct';
import promotion1 from '../../../Assets/1.png';
import promotion2 from '../../../Assets/2.png';
import promotion3 from '../../../Assets/3.png';


const list = [
    {
      index: 0,
      productname: "Mountain Vista Camera",
      price: "$599.99",
      imagelink: "https://images.unsplash.com/photo-1719937050601-969f4f25d060?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
    },
    {
      index: 1,
      productname: "Elegant Timepiece",
      price: "$299.50",
      imagelink: "https://plus.unsplash.com/premium_photo-1729688320703-acff8e51b661?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      index: 2,
      productname: "Vintage Typewriter",
      price: "$149.99",
      imagelink: "https://images.unsplash.com/photo-1729731321992-5fdb6568816a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      index: 3,
      productname: "Modern Desk Lamp",
      price: "$79.95",
      imagelink: "https://images.unsplash.com/photo-1729710877242-6305c22c18b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
    }
  ]; 
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
            <div className='best-seller'>
                <h2>BestSellers <FontAwesomeIcon icon={faFire} /> </h2>
                <CarouselProduct productList={list} />
            </div>
        </div>
    )
}

export default Kids; 