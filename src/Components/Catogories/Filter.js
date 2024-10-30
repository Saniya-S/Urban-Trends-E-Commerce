import {useState, useEffect} from 'react';
import './category.css';
import ProductCard from '../ProductCard';

const Filter = (props) => {
    const {category} = props;
    console.log('category:', category);

    //State Variables
    const [styles, setStyles] = useState([]);
    const [colors, setcolors] = useState([]);

    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [choosenStyle, setChoosenStyle] = useState(null);
    const [choosenColor, setChoosenColor] = useState(null);
    const [checked, setChecked] = useState(null);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/subcategory', {
            method: 'POST',
            body: category
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            } return response.json();
        })
        .then(data => {
            // console.log(data)
            setStyles(data);
        })
        .catch(error => console.error(`Error fetching styles: ${error}`))
    }, []);

    //colors
    useEffect(() => {
        fetch('http://localhost:3001/colors', {
            method: 'POST',
            body: category
        })
        .then(response => {
            if (!response.ok){
                console.error(`HTTP ERROR ${response.status}`)
            } return response.json();
        })
        .then(data => {
            setcolors(data);
        })
        .catch(error => {
            console.error('error fetching colors', error);
        })
    }, [category]);

    //Show All Products on initial render
    useEffect(() => {
        fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify({
                category: category
        })
        })
        .then(response => {
            if (!response.ok){
                console.error('HTTP Error Status:', response.status);
            } return response.json();
        }) 
        .then(data => {
            console.log('All Products', data);
            setProducts(data);
        })
        .catch(error => {
            console.error("Error in sending retriving products", error)
        })
    }, [category]);


    //Handle min price
    const handleMinPrice = (e) => {
        if (e.target.value === ''){
            setMinPrice(null);
        }else{
            setMinPrice(e.target.value);
        }
        
    }

    //Handle max price
    const handleMaxPrice = (e) => {
        if (e.target.value === ''){
            setMaxPrice(null);
        }else{
            setMaxPrice(e.target.value);
        }
        
    };

    //Handle Style 
    const handleStyle = (e) => {
        if (e.target.value === 'none'){
            setChoosenStyle(null);
        } else{
            setChoosenStyle(e.target.value);
        }
        
    };

    //handle Color
    const handleColor = (e) => {
        if (e.target.value === 'none'){
            setChoosenColor(null);
        } else{
            setChoosenColor(e.target.value);
        }
    };

    //handle check
    const handleCheck = (e) => {
        if (e.target.checked){
            setChecked('offer');
        } else{
            setChecked(null);
        }
        
        
    }

    //handle Submit
    const handleSubmit = (e) => {
        e.preventDefault(); //prevents page reload 
        console.log('color', choosenColor);
        console.log('promotion', checked);
        //fetch request for getting products
        fetch('http://localhost:3001/products', {
            method: 'POST',
            body: JSON.stringify({
                category: category,
                minprice: minPrice,
                maxprice: maxPrice,
                style: choosenStyle,
                color: choosenColor,
                promotion: checked
            })
        })
        .then(response => {
            if (!response.ok) {
                console.error('HTTP Error', response.status);
            } return response.json();
        })
        .then(data => {
            console.log('filtered data', data)
            setProducts(data);
        })
        .catch(error => {
            console.error('Error in fetching products', error);
        })
   
    }

    return(
        <div>
            {/* explore products */}
            <div className="explore-products-container">
                <div>
                    <h2>Explore Products</h2>
                </div>
                <div className='filter'>

                    {/* Min Price */}
                    <div className='filter-box'>
                        <div>
                            <label htmlFor="min-price">Min Price</label>
                        </div>
                        <div className='input-box'>
                            <input className='input-num' type='num' value={minPrice} name="min-price" placeholder='0' onChange={handleMinPrice}/>
                        </div> 
                       
                    </div>

                    {/* Max Price */}
                    <div className='filter-box'> 
                        <div>
                            <label htmlFor="max-price">Max Price</label>
                        </div>
                        <div className='input-box'>
                            <input type="num" className='input-num' name="max-price" placeholder='000' value={maxPrice} onChange={handleMaxPrice}/>
                        </div>
                    </div>

                    {/* Style */}
                    <div className='filter-box'>
                        <div>
                            <label htmlFor="Style">Style</label>
                        </div>
                        <div className='input-box'>
                            <select name="styles" placeholder='Styles' onChange={handleStyle}>
                                <option value="none">None</option>
                                {styles && styles.map((style) =>
                                    <option value={style.subcategory}>{style.subcategory}</option>
                                )}
                                
                            </select>
                        </div>
                    </div>

                    {/* Color */}
                    <div className='filter-box'>
                        <div>
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className='input-box'>
                            <select name="color" onChange={handleColor}>
                            <option value="none">None</option>
                            {colors && colors.map((color) =>
                                    <option value={color}>{color}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    {/* Promotion */}
                    <div className='filter-box'>
                        <div>
                            <label htmlFor="promotion">Promotion</label>
                        </div>
                        <div className='input-box promotion'>
                            <div>
                                <input className='checkbox' type="checkbox" name="promotion" onChange={handleCheck} />
                            </div>
                           
                        </div>
                    </div>

                    <div className='filter-box filter-button'>
                        <div>
                        <button onClick={handleSubmit}>Filter</button>
                        </div>
                        
                    </div>

                </div>
            </div>

            {/* Product display */}
            <div className='container'>
            <div className='product-display'>
                {products.length === 0 ? <p>No results found</p> : products && products.map((product) => 
                    <div className='product-card'>
                    <ProductCard item={product} />
                    </div> )}
                
                
            </div>
            </div>
            
        </div>
    )
}

export default Filter;