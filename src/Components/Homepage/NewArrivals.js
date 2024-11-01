import { useState, useEffect } from 'react';
import CarouselProduct from '../CarouselProduct';
//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';




const NewArrivals = () => {
  const [newArrivals, setnewArrivals] = useState([]);

  //On initial render send POST request to fetch newArrivals
  useEffect(() => {
  fetch('http://localhost:3001/newArrivals', {
      method: 'POST',
  })
  .then(response =>{
      if (!response.ok) {
          console.error('HTTP error status,', response.status);

      } return response.json();
  })
  .then(data => {
      console.log('data:', data);
      setnewArrivals(data);
  })
  .catch(error => {
      console.error('Error in fetching newArrivals', error);
  })
}, [])


    return(
        <div className="new-arrivals-container">
            <h2>New Arrivals <FontAwesomeIcon icon={faHeart} /> </h2>
            <CarouselProduct productList={newArrivals} />
        </div>
    )
}

export default NewArrivals;