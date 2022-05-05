import React from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';

const SignUp = () => {
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth, sendEmailVerification);
    const navigate = useNavigate();
    const handleSignUp = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmpassword.value;
        createUserWithEmailAndPassword(email, password);
        navigate('/');
    }
    return (
        <div className='resister-form-container'>
            <form onSubmit={handleSignUp} className='resister-form' action="">
                <input className='mb-3' type="text" name='name' placeholder='Name' required />
                <br />
                <input className='mb-3' type="email" name='email' placeholder='Your Email' required />
                <br />
                <input className='mb-3' type="password" name='password' placeholder='Password' required />
                <br />
                <input className='mb-3' type="password" name='confirmpassword' placeholder='Confirm Password' required />
                <br />
                <input className='btn btn-warning text-white' type="submit" value="Sign Up" />
                <p>Already have an account <Link to={'/login'}>Please Login</Link></p>
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

export default SignUp;