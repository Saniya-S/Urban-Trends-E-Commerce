import { Link } from 'react-router-dom';
import {useState} from 'react';
//Logo
import logo from '../../Assets/Urban Trends.png';
//CSS 
import './navbar.css';
//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons';
//Components
import Search from './Search';

//List of nav links
const navLinks = [{category: 'Kids', path: '/kids'}, {category: 'Women', path: '/women'}, {category: 'Men', path: '/men'}, {category: 'Accessories', path: '/accessories'}];

const Navbar = () => {
    //State Variables
    const [isToggle, setIsToggle] = useState(false);

    //toggle function
    const handleToggle = () => {
        setIsToggle(!isToggle);
    }
    return (
        
            <nav>
                <div className="nav-container">
                <div>
                    <Link to='home'>
                    <img className='logo' src={logo} alt='Urban Trends Logo'/>
                    </Link>
                </div>
                <div className='toggle desk-links' style={{display: isToggle ? 'inline-block' : 'none'}}>
                        <div className='desk-links-box'>
                        <ul className='links'>
                            {navLinks && navLinks.map((navLink) => <Link to={navLink.path}><li>{navLink.category}</li></Link>)}
                        </ul>
                        </div>
                </div>
                <div>
                    <div className='account-container'>
                        <Link to='login'>Login</Link>
                        <p> / </p>
                        <Link to='sign-up'>Signup</Link>
                    </div>
                <div className='icons-container'>
                    <div className='show'>
                        <Link to='login'>Login</Link>
                        <p> / </p>
                        <Link to='sign-up'>Signup</Link>
                    </div>
                    <div>
                        <Search />
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                    <div onClick={handleToggle} className='hamburger-container'>
                        <div>
                        <FontAwesomeIcon className='hamburger' icon={faBars} />
                        </div>
                    </div>       
                </div>
                </div>
                
               

                </div>
                
            </nav>
        
    )
}

export default Navbar;