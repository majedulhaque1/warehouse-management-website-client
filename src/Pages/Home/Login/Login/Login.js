import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useSignInWithEmailAndPassword, useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
const Login = () => {
    const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from, {replace :true});
    }
    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='resister-form-container'>
            <form onSubmit={handleSignIn} className='resister-form' action="">
                <input className='mb-3' type="email" name='email' placeholder='Your Email' required />
                <br />
                <input className='mb-3' type="password" name='password' placeholder='Password' required />
                <br />
                <input className='btn btn-warning text-white' type="submit" value="Login" />
                <p>New to website <Link to={'/signup'}>Create an account</Link></p>
                <div className='divider'>
                    <div className='line-style'></div>
                    <p>or</p>
                    <div className='line-style'></div>
                </div>
                <div>
                    <button className='btn btn-warning w-100 text-white'>Google Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;