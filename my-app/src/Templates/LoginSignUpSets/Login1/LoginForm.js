import React from 'react';

const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="login-box solid">
          <form>
            <h1 className="login-text">
              Sign In
            </h1>
            <label>Username</label>
            <br />
            <input
              type='text'
              name='username'
              className='login-box'
            />
            <br />
          
            <label>Password</label>
            <br />
            <input
              type='password'
              name='password'
              className='login-box'
            />
            <br />
            
            <input 
              type='submit'
              value='LOGIN'
              className='login-'
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
