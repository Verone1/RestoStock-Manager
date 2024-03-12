import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import '../index.css';

const LoginPage = ({ onLogin }) => {

    useEffect(() => {
        document.title = 'Login | RestoStock Manager';
    })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const submitButton = async (event) => {
        event.preventDefault();
        setLoginError('');

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();

            if (response.ok) {
                onLogin(username, true);
            } else
                setLoginError(data.message || 'Login failed');
        } catch (error) {
            console.error('Login error', error);
            setLoginError('Login failed')
    } 
};

return (
    <div className='login-container login-page-background'>
        <img src={logo} alt="Logo" className="login-logo" />
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
            <button type='submit' id='save-button'>Login</button>
        </form>
    </div>
);
};

export default LoginPage;
