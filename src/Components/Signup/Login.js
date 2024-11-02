import { useNavigate, Link } from 'react-router-dom';
import {useState, useContext} from 'react';
import { AuthContext } from '../Context/AuthenticationContext';

import './form.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    //context
    const {setIsAuthenticated, setAccUsername, setUserId} = useContext(AuthContext);
    
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(response => {
            if (!response.ok){
                if(response.status === 404){
                    setMessage('User Does not Exist!')
                } else if (response.status === 401){
                    setMessage('Invalid Credential!')
                }
                else{
                    console.error('HTTP ERROR status', response.status);
                    setMessage('An error occured! Try again later');
                }
                
            }else {
                setUsername('');
                setPassword('');
                return response.json();
            }
        }).then(data => {
            setAccUsername(data.username);
            setUserId(data.userId);
            setIsAuthenticated(true);
            navigate('/');
        })
        
        .catch(error => {
            console.error('error in adding new user', error)
        })
    }
    return(
        <div>
            <div className='form-header'>
                <div className='form-header-box'><h1>Login</h1></div>
                <div className='form-header-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-container'>                            
                            <div className='form-box'>
                                <div>
                                    <label>Enter a Username</label>
                                </div>
                                <div>
                                    <input type='text' required value={username} onChange={handleUsername}/>
                                </div>
                            </div>
                                                       
                            <div className='form-box'>
                                <div>
                                    <label>Enter a Password</label>
                                </div>
                                <div>
                                    <input type='password' required value={password} onChange={handlePassword}/>
                                </div>
                            </div>
                            
                            <div className='form-button'>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                               
                            </div>
                            <div className='message'>
                                <div>
                                    <p>{message}</p>
                                </div>
                                
                            </div>
                            <div className='message link'>
                                <div>
                                    <Link to='/sign-up'> Don't have an Account? Signup now! </Link>
                                </div>
                               
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;