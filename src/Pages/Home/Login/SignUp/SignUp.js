import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <form className='form' action="">
                <input type="text" name='name' placeholder='Name' required/>
                <br />
                <input type="email" name='email' placeholder='Your Email' required />
                <br />
                <input type="password" name='password' placeholder='Password' required />
                <br />
                <input type="password" name='confim-password' placeholder='Confirm Password' required />
                <br />
                <input type="submit" value="Sign Up" />
                <div className='divider'>
                    <div className='line-style'></div>
                    <p>or</p>
                    <div className='line-style'></div>
                </div>
                <div>
                    <button className='btn btn-primary'>Google Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;