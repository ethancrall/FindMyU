"use client";
// import { useState, useEffect } from 'react';
import styles from './login.module.css'

export default function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [rememberMe, setRememberMe] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       showAlert('Username and password are both required.');
//       return;
//     }
    
//     if(rememberMe) {
//       localStorage.setItem('username', username)
//       localStorage.setItem('password', password)
//     } else {
//       localStorage.removeItem('username', username)
//       localStorage.removeItem('password', password)
//     }

//     try {
//       const res = await fetch('/api/login/find-user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();

//       if (res.ok && data.success) {
//         window.location.href = '/';
//       } else {
//         showAlert(data.message);
//       }
//     } catch (error) {
//       console.error('Error: ', error);
//       showAlert('An error occurred. Please try again.');
//     }
//   };

//   useEffect(() => {
//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');
//     if(storedUsername && storedPassword) {
//       setUsername(storedUsername);
//       setPassword(storedPassword);
//       setRememberMe(true);
//     }
//   }, []);

//   const showAlert = (message) => {
//     const alertContainer = document.getElementById('alert-container');
//     const alertMessage = document.getElementById('alert-message');

//     alertMessage.textContent = message;
//     alertContainer.classList.remove('hidden');

//     setTimeout(() => {
//       alertContainer.classList.add('hidden');
//     }, 10000);

//     document.getElementById('alert-close').addEventListener('click', () => {
//       alertContainer.classList.add('hidden');
//     });
//   };

  return (
    <>
        <div className={styles.container}>
            <a href="/" className={styles.backToHome}>
                <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                Back to Home
            </a>
            <div className={styles.backgroundImages}></div>
            <div className={styles.toggleBar}>
                <div className={styles.loginToggleBar}>
                    <h2>Login</h2>
                </div>
                <div className={styles.registerToggleBar}>
                    <h2>Register</h2>
                </div>
            </div>
            <div className={styles.loginContainer}>
                <img className={styles.logo} src="/FindMyULogo.jpg" alt="FindMyU Logo" />
                <h1 className={styles.loginTitle}>Login</h1>
                <form className={styles.loginForm}>
                    <input className={styles.loginInput} type="text" id="username" name="username" placeholder="Username" />
                    <input className={styles.loginInput} type="password" id="password" name="password" placeholder="Password" />

                    <div className={styles.rememberMe}>
                        <input className={styles.rememberMeInput} type="checkbox" id="rememberMe" name="rememberMe" />
                        <label className={styles.rememberMeLabel} htmlFor="rememberMe">Remember me</label>
                    </div>

                    <button className={styles.loginButton} type="submit">Login</button>
                </form>
            </div>
        </div>

    </>
  );
}