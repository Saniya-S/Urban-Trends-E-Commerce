import { useParams, Link } from "react-router-dom";
import './product-view.css';
import {useState, useEffect} from 'react';
//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartArrowDown, faCircleLeft } from '@fortawesome/free-solid-svg-icons';

const ProductView = () => {
    const {id, category, productName} = useParams();
    const [individualProducts, setIndividualProducts] = useState([]);
    // console.log(category);

    //request to fetch selected product
    useEffect(() => {
        fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify({
                category: category,
                minprice: null,
                maxprice: null,
                style: null,
                color: null,
                promotion: null,
                product_name: productName,
                prod_id: id

            })})
            .then(response => {
                if (!response.ok){
                    console.error('HTTP Error status:', response.status)
                } 
                return response.json();
            })
            .then(data => {
                console.log('view', data)
                setIndividualProducts(data[0]);
            })
            .catch(error => {
                console.error('Error in fetching selected products:', error);
            })
        
    }, [category, productName, id])

    // useEffect(() => {
    //     console.log('Individual Products', individualProducts);
    // }, [individualProducts]); 🔴🔴

    return(
        <div style={{height: '100%'}}>
            
            <div className="path">
                <Link to={`/${category}`} >
                <FontAwesomeIcon className='icon back-icon' icon={faCircleLeft} />
                </Link>
                    <p>{category}&lt; {individualProducts.subcategory}&lt; {productName} </p>
                    
                
            </div>

            <div>
                <h1>{individualProducts.product_name}</h1>
            </div>
            <div className="product-view-container">
                
                    <div className="image-container">
                    <img src={individualProducts.image_link}  alt="" />
                    </div>
                
                <div className="details-container">
                    <div>
                        <h2>AED {individualProducts.price}</h2>
                    </div>
                    <div>
                        <p>{individualProducts.description}</p>
                    </div>
                    <div>
                    <h3>Colors Available:</h3>
                    <div>
                        {individualProducts.colors && individualProducts.colors.split(',').map((color) => 
                            <div> <input type="checkbox" value={color}/> <lable>{color}</lable> </div>
                        )}
                        
                    </div>
                    </div>

                    {/* Buttons */}
                    <div className="btn-container">
                        <div>
                            <button>Wishlist <FontAwesomeIcon  icon={faHeart} /></button>
                        </div>
                        <div>
                            <button>Cart <FontAwesomeIcon icon={faCartArrowDown} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView;