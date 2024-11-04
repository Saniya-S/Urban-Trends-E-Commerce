//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//CSS
import './navbar.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    
    //handle searchquery
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const search = () => {
        setSearchQuery('');
        navigate(`/search/${searchQuery}`);
    }

    return(
        <div className='search-container'>
            <div>
                <form>
                    <input type='text' placeholder='What are you looking for?' onChange={handleSearchQuery} value={searchQuery}/>
                </form>
            </div>
            <div>
                <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} onClick={search}/>
            </div>

        </div>
    )
}

export default Search;