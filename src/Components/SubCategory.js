import {Link} from 'react-router-dom';
import './sub-category.css';
const SubCategory = (props) => {
    const {categoryList, mainCategory} = props;
    
    return (
        <div className='sub-category-container'>
            
            {categoryList && categoryList.map((category, index) => 
                <div className='sub-category-box' key={index}>
                    <Link to={`/${mainCategory}/${category.subcategory}`}>
                        <div className="category-name">
                            <div>
                                <h5>{category.subcategory}</h5>
                            </div>
                            
                        </div>
                    </Link>
                </div>
            )}
            
        </div>
    )
}

export default SubCategory;