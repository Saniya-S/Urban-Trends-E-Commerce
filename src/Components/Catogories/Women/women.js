import {useState, useEffect} from 'react';
//CSS
import '../category.css';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFire} from '@fortawesome/free-solid-svg-icons';
import Carousel from '../../Carousel';
import CarouselProduct from '../../CarouselProduct';
import SubCategory from '../../SubCategory';
import Filter from '../Filter';
import promotion1 from '../../../Assets/1.png';
import promotion2 from '../../../Assets/2.png';
import promotion3 from '../../../Assets/3.png';



//Banner List
const images = [
    promotion1,
    promotion2,
    promotion3,
    
  ];

//Sub Categories Kids
// const kidsSubcategories = [
//     { name: 'Boho Chic', path: '/kids/boho-chic' },
//     { name: 'Sporty Vibes', path: '/kids/sporty-vibes' },
//     { name: 'Vintage Charm', path: '/kids/vintage-charm' },
//     { name: 'Minimalist Basics', path: '/kids/minimalist-basics' },
//     { name: 'Graphic Play', path: '/kids/graphic-play' },
//     { name: 'Preppy Look', path: '/kids/preppy-look' },
//     { name: 'Streetwear Cool', path: '/kids/streetwear-cool' },
//     { name: 'Pastel Aesthetic', path: '/kids/pastel-aesthetic' },
//     { name: 'Floral Patterns', path: '/kids/floral-patterns' },
//     { name: 'Retro Pop', path: '/kids/retro-pop' },
//     { name: 'Animal Prints', path: '/kids/animal-prints' },
//     { name: 'Nautical Stripes', path: '/kids/nautical-stripes' },
//     { name: 'Denim-on-Denim', path: '/kids/denim-on-denim' },
//     { name: 'Monochrome Elegance', path: '/kids/monochrome-elegance' },
//     { name: 'Layered Comfort', path: '/kids/layered-comfort' }
// ];🔴🔴


const Women = () => {
    //State Variables
    const [categoryList, setCategoryList] = useState([]);
    const [bestSellers, setBestSellers ] = useState([]);
    

// Send POST request on initial render to get subcategories list
useEffect(() => {
    fetch('http://localhost:3001/subcategory', {
      method: 'POST',
      body: 'women'
    })
    .then(response => {
        // Check if response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response if status is OK
    })
    .then(data => {
        // console.log('fetched categories:', data);
        setCategoryList(data);
        
    })
    .catch(error => console.error('Error fetching subcategories:', error)); // Handle any errors
}, []);

//On initial render send POST request to fetch bestsellers
useEffect(() => {
    fetch('http://localhost:3001/bestsellers', {
        method: 'POST',
        body: 'women'

    })
    .then(response =>{
        if (!response.ok) {
            console.error('HTTP error status,', response.status);

        } return response.json();
    })
    .then(data => {
        setBestSellers(data);
    })
    .catch(error => {
        console.error('Error in fetching bestsellers', error);
    })
}, [])

      return (
        <div>
            <div className="category-heading">
                <h1>Women</h1>
            </div>
            <div className='cat-banner'>
                <Carousel displayDots={true} images={images} height={'400px'} size={'cover'} />
            </div>
            <div className='best-seller'>
                <h2>BestSellers <FontAwesomeIcon icon={faFire} /> </h2>
                <CarouselProduct productList={bestSellers} />
            </div>
            <div className='sub-category'>
                <SubCategory categoryList={categoryList} mainCategory={'women'}/>
            </div>

            <div>
                <div>
                    <Filter category= {'women'}/>
                </div>
            </div>
        </div>
    )
}

export default Women; 