import { Link } from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
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
    const {accUsername, isAuthenticated, setIsAuthenticated, userId, setWishlist, setCartList} = useContext(AuthContext);


    useEffect(() => {
        if (isAuthenticated){
            fetch('http://localhost:3001/wishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId:userId,
                    action: 'wishlist'
                })
            }).then(response => {
                if (!response.ok){
                    console.error('http error', response.status);
                }else{
                    return response.json();
                }
            }).then(data => {
                setWishlist(data);
            }).catch(error => {
                console.error('error in fechting list of wishlist', error);
            })
        } else{
            return;
        }
    }, [isAuthenticated, setWishlist, userId]);

    useEffect(() => {
        if (isAuthenticated){
            fetch('http://localhost:3001/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId:userId,
                    action: 'cartlist'
                })
            }).then(response => {
                if (!response.ok){
                    console.error('http error', response.status);
                }else{
                    return response.json();
                }
            }).then(data => {
                setCartList(data);
            }).catch(error => {
                console.error('error in fechting list of cartlist', error);
            })
        } else{
            return;
        }
    }, [isAuthenticated, setCartList, userId]);

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
                    <div className='show-small'>
                    <div className='account-container' style={{display: isAuthenticated ? 'none' : 'flex'}}>
                        <Link to='login'>Login</Link>
                        <p> / </p>
                        <Link to='sign-up'>Signup</Link>
                    </div>

                    <div className='profile' style={{display: isAuthenticated ? 'flex' : 'none'}}>
                            <div><h2>Hello @{accUsername}!</h2></div>
                            <div><FontAwesomeIcon style={{cursor: 'pointer'}} onClick={handleLogout} className='icon' icon={faRightFromBracket} /></div>
                    </div>
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
                        <Link to='/wishlist'>
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                        
                    </div>
                    <div className='icon'>
                        <Link to='/cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
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