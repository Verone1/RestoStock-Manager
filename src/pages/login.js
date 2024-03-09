import React, { useState } from 'react';
import logo from '../assets/logo.png';
import '../index.css';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitButton = (event) => {
        event.preventDefault();
        // login code here
        onLogin(username, password);
    };

    return (
        <div className='login-container login-page-background'>
            <img src = {logo} alt = "Logo" className="login-logo"/>
            <h2 className="logintext">LOGIN</h2>
            <form onSubmit={submitButton} className='login-form'>
                <div className='login-form-group'>
                    <label htmlFor='username'>USERNAME</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='login-form-group'>
                    <label htmlFor='password'>PASSWORD</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' id='submit-button'>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
