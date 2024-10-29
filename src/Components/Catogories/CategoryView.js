import { useParams, Link } from "react-router-dom";
import { useState, useEffect} from 'react';
import ProductCard from "../ProductCard";
//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleLeft } from '@fortawesome/free-solid-svg-icons';


const CategoryView = () => {
    const {subCategory, category} = useParams();
    console.log('sub', subCategory);
    const [categoryProduct, setCategoryProduct] = useState([]);

    //Fetching data based on the category listed in the path
    useEffect(() => {
        fetch('http://localhost:3001/products',{
            method: 'POST',
            body: JSON.stringify({
                category: 'women',
                minprice: null,
                maxprice: null,
                style: subCategory,
                color: null,
                promotion: null
                
            })
        })
        .then(response => {
            if (!response.ok){
                console.error('HTTP ERROR, Status:', response.status);
            } return response.json();
        })
        .then((data) => {
            console.log('data:', data);
            setCategoryProduct(data);
        })
        .catch(error => {
            console.error("Error in fetching products based on the path", error);
        })
    }, [category, subCategory]);
    
    return(
        <div>
            <div className="heading">
                <Link to={`/${category}`} >
                <FontAwesomeIcon className='icon back-icon' icon={faCircleLeft} />
                </Link>
                <h1>{subCategory.toUpperCase()}</h1>
            </div>
            <div className="category-view-container">
                <div className="category-box">
                    {categoryProduct && categoryProduct.map((product) => 
                        <ProductCard item={product} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CategoryView;