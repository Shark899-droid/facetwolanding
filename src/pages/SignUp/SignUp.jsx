import React from 'react';
import SignInUpMain from '../../components/SignInUpMain/SignInUpMain';
import './SignUp.css';
import { useGlobalContext } from '../../context.js';

function SignUp() {
  const { signUpTitle } = useGlobalContext();
  return (
    <div>
      <SignInUpMain title={signUpTitle} />
      <div className='centerBelow'>
        <div className='belowSignUpMain'>
          <div className='belowLeft'>
            <img src='https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
          </div>
          <div className='belowRight'>
            <form>
              <div className='linesSignIn'>
                <label htmlFor='username'>Username</label>
                <input type='text' placeholder='Username' />
              </div>
              <div className='linesSignIn'>
                <label htmlFor='password' style={{ marginTop: '1rem' }}>
                  Password
                </label>
                <input type='password' placeholder='Password' />
              </div>
              <div className='linesSignIn'>
                <label htmlFor='email' style={{ marginTop: '1rem' }}>
                  Email Address
                </label>
                <input type='email' placeholder='gigante.89@hotmail.it' />
              </div>
              <div className='linesSignIn'>
                <label htmlFor='phone' style={{ marginTop: '1rem' }}>
                  Phone Number
                </label>
                <input type='tel' placeholder='Phone Number' />
              </div>
              <button type='submit'>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
