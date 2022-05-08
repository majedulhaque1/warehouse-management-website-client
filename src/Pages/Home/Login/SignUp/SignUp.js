import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';
import Loading from '../../../Loading/Loading';

const SignUp = () => {
    const [createUserWithEmailAndPassword,user,loading,error1] = useCreateUserWithEmailAndPassword(auth, sendEmailVerification);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        if(error1){
            setError(error1?.message);
        }
    },[])
    if(loading){
        return <Loading></Loading>
    }
    const handleSignUp = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmpassword.value;
        if(password != confirmPassword){
            return setError('Password And Confirm Password not match');
        }
        createUserWithEmailAndPassword(email, password);
        navigate('/');
        toast.success('Account Create successfully',{position: 'top-right',
    autoClose : 3000});
    }
    return (
        <div className='resister-form-container'>
            <div>

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
                <p className='text-danger'>{error}</p>
            </form>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-warning w-100 text-white'>Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;