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
import promotion7 from '../../../Assets/7.png';
import promotion8 from '../../../Assets/8.png';



//Banner List
const images = [
    promotion8,
    promotion1,
    promotion7,
    
    
  ];




const Accessories = () => {
    //State Variables
    const [categoryList, setCategoryList] = useState([]);
    const [bestSellers, setBestSellers ] = useState([]);
    

// Send POST request on initial render to get subcategories list
useEffect(() => {
    fetch('http://localhost:3001/subcategory', {
      method: 'POST',
      body: 'Accessories'
    })
    .then(response => {
        // Check if response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse the JSON response if status is OK
    })
    .then(data => {
        setCategoryList(data);
        
    })
    .catch(error => console.error('Error fetching subcategories:', error)); // Handle any errors
}, []);

//On initial render send POST request to fetch bestsellers
useEffect(() => {
    fetch('http://localhost:3001/bestsellers', {
        method: 'POST',
        body: 'Accessories'

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
                <h1>Accessories</h1>
            </div>
            <div className='cat-banner'>
                <Carousel displayDots={true} images={images} height={'400px'} size={'cover'} />
            </div>
            <div className='best-seller'>
                <h2>BestSellers <FontAwesomeIcon icon={faFire} /> </h2>
                <CarouselProduct productList={bestSellers} />
            </div>
            <div className='sub-category'>
                <SubCategory categoryList={categoryList} mainCategory={'Accessories'}/>
            </div>

            <div>
                <div>
                    <Filter category= {'Accessories'}/>
                </div>
            </div>
        </div>
    )
}

export default Accessories; 