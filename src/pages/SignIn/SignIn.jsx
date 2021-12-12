import React from 'react';
import './SignIn.css';
import SignInUpMain from '../../components/SignInUpMain/SignInUpMain';
import { useGlobalContext } from '../../context';

const SignIn = () => {
  const { signInTitle } = useGlobalContext();
  return (
    <>
      <div className='mainSignin'>
        <SignInUpMain title={signInTitle} />
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
          <button type='submit'>Sign In</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
