import {useState, useEffect} from 'react';
import './category.css';

const Filter = (props) => {
    const {category} = props;

    //State Variables
    const [styles, setStyles] = useState([]);
    const [colors, setcolors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/subcategory', {
            method: 'POST',
            body: 'women'
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
    

    return(
        <div>
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
                            <input className='input-num' type='num' name="min-price" placeholder='0' />
                        </div> 
                       
                    </div>

                    {/* Max Price */}
                    <div className='filter-box'> 
                        <div>
                            <label htmlFor="max-price">Max Price</label>
                        </div>
                        <div className='input-box'>
                            <input type="num" className='input-num' name="max-price" placeholder='000' />
                        </div>
                    </div>

                    {/* Style */}
                    <div className='filter-box'>
                        <div>
                            <label htmlFor="Style">Style</label>
                        </div>
                        <div className='input-box'>
                            <select name="styles" placeholder='Styles'>
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
                            <select name="color" id="">
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
                                <input className='checkbox' type="checkbox" name="promotion" id="" />
                            </div>
                           
                        </div>
                    </div>

                    <div className='filter-box filter-button'>
                        <div>
                        <button>Filter</button>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filter;