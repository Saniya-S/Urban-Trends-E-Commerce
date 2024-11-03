import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";
import '../Catogories/category.css';

const Result = () => {
    const {searchQuery} = useParams();
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/search', {
            method: 'POST',
            body: searchQuery
        }).then(response => {
            if(!response.ok){
                if(response.status === 404){
                    setMessage('No Results Found');
                } else{
                    setMessage('Error in fetching search results');
                }
            } else {
                return response.json();
            }
        }).then(data => {
            setMessage('');
            setProducts(data);
        }).catch(error => {
            console.error('Error in fetching search results:', error);
        })
    }, [searchQuery, setProducts, setMessage]);

    return(
        <div>
            <div>
                <h1>Results for {searchQuery}</h1>
            </div>
            <div>
                <p style={{margin: '10px'}}>{message}</p>
            </div>
            <div>
            <div className="category-view-container">
                <div className="category-box">
                    {products && products.map((product) => 
                        <div style={{flexBasis: '33.33%'}}>
                        <ProductCard item={product} minWidth={'33.33%'}/>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Result;