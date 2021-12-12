import React from 'react';
import './SignInUpMain.css';

function SignInUpMain({ title }) {
  return (
    <>
      <div className='mainUpContainer'>
        <div className='innerMainUpContainer'>
          <h1>{title}</h1>
          <span>
            Hassle-fre presence marking with real-time data availability to
            serve business interests. Make customized policies for all
            <br />
            departments and locations to run them on a single platform
          </span>
        </div>
      </div>
    </>
  );
}

export default SignInUpMain;
