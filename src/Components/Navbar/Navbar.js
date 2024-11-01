import { Link } from 'react-router-dom';
import {useState, useContext} from 'react';
//Logo
import logo from '../../Assets/Urban Trends.png';
//CSS 
import './navbar.css';
//Font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHeart, faCartShopping, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
//Components
import Search from './Search';
//Context
import { AuthContext } from '../Context/AuthenticationContext.js';

//List of nav links
const navLinks = [{category: 'Kids', path: '/kids'}, {category: 'Women', path: '/women'}, {category: 'Men', path: '/men'}, {category: 'Accessories', path: '/accessories'}];

const Navbar = () => {
    //State Variables
    const [isToggle, setIsToggle] = useState(false);

    //Context
    const {accUsername, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
    console.log(accUsername);

    //toggle function
    const handleToggle = () => {
        setIsToggle(!isToggle);
    }

    //handle logout
    const handleLogout = () => {
        setIsAuthenticated(false);
    }
    return (
        
            <nav>
                <div className="nav-container">
                <div>
                    <Link to='/'>
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
                        <div className='profile' style={{display: isAuthenticated ? 'none' : 'flex'}}>
                            <Link to='login'>Login</Link>
                            <p> / </p>
                            <Link to='sign-up'>Signup</Link>
                        </div>
                        
                        <div className='profile' style={{display: isAuthenticated ? 'flex' : 'none'}}>
                            <div><h2>Hello @{accUsername}!</h2></div>
                            <div><FontAwesomeIcon style={{cursor: 'pointer'}} onClick={handleLogout} className='icon' icon={faRightFromBracket} /></div>
                        </div>
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