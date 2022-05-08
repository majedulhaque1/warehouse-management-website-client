import React, {useEffect, useRef, useState} from 'react';
import Loading from '../../../Loading/Loading';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useSignInWithEmailAndPassword, useAuthState, useSignInWithGoogle, useSendPasswordResetEmail} from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import {toast, ToastContainer} from 'react-toastify';
const Login = () => {
    const [user] = useAuthState(auth);
    const [signInWithEmailAndPassword, signUser, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const refEmail = useRef('');
    const [catchError, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    if(user){
        navigate(from, {replace :true});
    }
    useEffect(() =>{
        if(error){
            setError(error?.message);
        }
        else if(gError){
            setError(gError?.message);
        }
    },[error,gError])
    if(loading || gLoading){
        return <Loading></Loading>
    }

    const handleSignIn = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        toast.success('Login successfully',{position: 'top-right',
    autoClose : 3000});
    }
    const handleResetPassword = () =>{
        sendPasswordResetEmail(refEmail.current.value);
        toast.success('Reset Password email send');
    }
    return (
        <div className='resister-form-container'>
        {/* <ToastContainer></ToastContainer> */}
            <div> 
            <form onSubmit={handleSignIn} className='resister-form' action="">
                <input className='mb-3' type="email" ref={refEmail} name='email' placeholder='Your Email' required />
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
                <p className='text-danger'>{catchError}</p>
            </form>
                <div>
                    <button onClick={handleResetPassword} className='btn btn-link w-100 text-primary'>Forgot Password</button>
                </div>
                <div>
                    <button onClick={() => signInWithGoogle()} className='btn btn-warning w-100 text-white'>Google Sign In</button>
                </div>
            </div>
            {/* // <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Login;