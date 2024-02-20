import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitButton = (event) => {
    event.preventDefault();
    // login code here
    onLogin(username, password);
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={submitButton} className='login-form'>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='login-button'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;