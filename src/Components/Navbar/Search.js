//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//CSS
import './navbar.css';

const Search = () => {
    return(
        <div className='search-container'>
            <div>
                <form>
                    <input type='text' placeholder='What are you looking for?' />
                </form>
            </div>
            <div>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>

        </div>
    )
}

export default Search;