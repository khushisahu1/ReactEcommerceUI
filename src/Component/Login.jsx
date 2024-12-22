import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        if (email === storedEmail && password === storedPassword) {
            alert('Login Successful!');
            // Redirect to Home page
            navigate('/welcome');
        } else {
            setErrorMessage('Incorrect email or password!');
        }
    };
  return (
    <div>
      <div className="mainbody">
    <form > 
        <div className="conatainer">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>

            </div>

            <div className="inputs">
           
                
                <div className="input">
                <label className='lable' >Email</label>
                   <input type='Email' placeholder='Email ID' value={email}
                onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                <label className='lable'>Password</label>
                    <input type='Password' placeholder='Password'  value={password}
                onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
           
            <div className="Forget_pasword">Lost Password<span>Click here</span></div>
            
            <div className="submitcontainer">
              
                {/* <div  className='submit'>LogIn</div> */}
                <button onClick={handleLogin} className='submit' >
                Login
            </button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
        </div>
        </form>
        </div>
    </div>
  )
}

export default Login
