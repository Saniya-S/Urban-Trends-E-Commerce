import {useState, useEffect} from 'react'
import './form.css';

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleFullname = (e) => {
        setFullname(e.target.value);
    }
    const handleUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/signup', {
            method: 'POST',
            body: JSON.stringify({
                fullname: fullname,
                username: username,
                email: email,
                password: password
            })
        }).then(response => {
            if (!response.ok){
                console.error('HTTP ERROR status', response.status);
                setMessage('Please check your details/ account already exist')
            }else {
                setFullname('');
                setUsername('');
                setEmail('');
                setPassword('');
                setMessage('Account Successfuly Created');
            }
        }).catch(error => {
            console.error('error in adding new user', error)
        })
    }
    return(
        <div>
            <div className='form-header'>
                <div className='form-header-box'><h1>Signup</h1></div>
                <div className='form-header-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-container'>
                            <div className='form-box'>
                                <div>
                                    <label>Enter your Full Name</label>
                                </div>
                                <div>
                                    <input type='text' required value={fullname} onChange={handleFullname}/>
                                </div>
                            </div>
                            
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
                                    <label>Enter your email</label>
                                </div>
                                <div>
                                    <input type='email' required value={email} onChange={handleEmail}/>
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;