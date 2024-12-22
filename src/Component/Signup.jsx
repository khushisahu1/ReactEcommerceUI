
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = () => {
        if (name && email && password) {
            // Save user data in localStorage
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert('Sign In Successful!');
            // Redirect to Login page
            navigate('/login');
        } else {
            alert('Please fill out all fields.');
        }
    };

  return (
    <div>
         <div className="mainbody">
    <form  > 
        <div className="conatainer">
            <div className="header">
                <div className="text">SignUp</div>
                <div className="underline"></div>

            </div>

            <div className="inputs">
            <div className="input">
                   
                   <label className='lable'>Name</label>
                   <input type='text' placeholder='Name' value={name}
                onChange={(e) => setName(e.target.value)} ></input>
               </div>
                
                <div className="input">
                <label className='lable' >Email</label>
                   <input type='Email' placeholder='Email ID'  value={email}
                onChange={(e) => setEmail(e.target.value)}   />
                </div>
                <div className="input">
                <label className='lable'>Password</label>
                    <input type='Password' placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)}  />
                </div>
            </div>
             <div className="Forget_pasword">Do you have account?<span><Link to="/login">LogIN</Link></span></div>
            
            
            <div className="submitcontainer">
                {/* <input type='submit' className='submit' value="Sighn in" /> */}
                <button className='submit' onClick={handleSignIn} >
                Sign In
            </button>

            </div>
        </div>
        </form>
        </div>
      
    </div>
  )
}

export default Signup
