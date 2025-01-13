"use client";
// import { useState, useEffect } from 'react';
import styles from './login.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function LoginRegister() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loginStyle, setLoginStyle] = useState({
        backgroundColor: 'var(--navy-blue)',
        color: 'var(--white)',
        zIndex: '5',
    });
    const [registerStyle, setRegisterStyle] = useState({
        backgroundColor: 'var(--white)',
        color: 'var(--navy-blue)',
        zIndex: '4',
    });

    const images = [
        'https://collegevine.imgix.net/ab6c1b72-c546-4c07-a342-46a00874e3c0.jpg?fit=crop&crop=edges&auto=format',
        'https://content.cms.utk.edu/wp-content/uploads/2023/03/utk-aerial-campus-02.jpg',
        'https://www.commonapp.org/static/f14242e1e38d8f02ce26ed9f5e57c371/vanderbilt-university_277.jpg',
        'https://abound.college/finishcollege/wp-content/uploads/sites/2/2020/04/University-of-Oklahoma-Norman-Campus-7-1493x888.jpg',
        'https://pbs.twimg.com/media/FSKV-dOXsAIcLfy.jpg:large',
        'https://www.fox16.com/wp-content/uploads/sites/84/2022/01/UA-Old-Main-3.jpg?w=2560&h=1440&crop=1',
        'https://phphd.phhp.ufl.edu/wordpress/files/photoshelter/I0000hi5h0FstolY-1680x1120.jpg',
        'https://www.utexas.edu/sites/default/files/sotu_1500x675.jpg',
        'https://wildcatliving.uky.edu/sites/default/files/2022-08/170928WOODLANDGLENIV148%20copy.JPG',
        'https://www.tamu.edu/_files/images/life-in-aggieland/aerial-tamu-corps-quad.JPG',
        'https://marvel-b1-cdn.bc0a.com/f00000000290274/www.lsu.edu/housing/images/grid_small_photos/reslife_rha_blockparty_jfn.jpg',
        'https://wire.auburn.edu/content/provost/2024/09/images/20240924-samford-hall-aerial.jpg',
        'https://www.msstate.edu/sites/www.msstate.edu/files/2022-08/YMCA_Plaza_Block_Party_20220819_M6B8473_featured_0.jpg',
        'https://showme.missouri.edu/wp-content/uploads/2021/06/Campus-Beauty-26.jpg',
        'https://thegeorgiabulldogclub.com/wp-content/uploads/2021/02/page-georgiaalways-1466x823-1.jpg',
    ];

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        if(storedUsername && storedPassword) {
            setUsername(storedUsername);
            setPassword(storedPassword);
            setRememberMe(true);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

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

    const toggleActive = (active) => {
        const loginBar = document.getElementsByClassName('.loginToggleBar');
        const registerBar = document.getElementsByClassName('.registerToggleBar');

        if (active === 'login') {
            setIsLogin(true);
            setLoginStyle({
                backgroundColor: 'var(--navy-blue)',
                color: 'var(--white)',
                zIndex: '5',
            });
            setRegisterStyle({ 
                backgroundColor: 'var(--white)',
                color: 'var(--navy-blue)',
                zIndex: '4',
            });
        } else {
            setIsLogin(false);
            setRegisterStyle({
                backgroundColor: 'var(--navy-blue)',
                color: 'var(--white)',
                zIndex: '5',
            });
            setLoginStyle({ 
                backgroundColor: 'var(--white)',
                color: 'var(--navy-blue)',
                zIndex: '4',
            });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        // if (!username || !password) {
        //     showAlert('Username and password are both required.');
        //     return;
        // }

        if(rememberMe) {
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
        } else {
            localStorage.removeItem('username', username)
            localStorage.removeItem('password', password)
        }

        // try {
        //     const res = await fetch('/api/login/find-user', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ username, password }),
        //     });

        //     const data = await res.json();

        //     if (res.ok && data.success) {
        //         window.location.href = '/';
        //     } else {
        //         showAlert(data.message);
        //     }
        // } catch (error) {
        //     console.error('Error: ', error);
        //     showAlert('An error occurred. Please try again.');
        // }
        window.location.href = '/';
    };

    const handleRegister = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className={styles.container}>
                <a href="/" className={styles.backToHome}>
                    <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    Back to Home
                </a>
                <div className={styles.backgroundImages}>
                    {images.map((src, index) => (
                        <img
                            key={index}
                            className={styles.transitionImage}
                            src={src}
                            alt="SEC College Campus"
                            style={{ opacity: currentImage ===index ? 1 : 0 }}
                        />
                    ))}
                </div>
                <div className={styles.toggleBar}>
                    <button 
                        className={`${styles.loginToggleBar} ${isLogin ? 'active' : ''}`}
                        style={loginStyle}
                        onClick={() => toggleActive('login')}
                    >
                        <h2>Login</h2>
                    </button>
                    <button
                        className={`${styles.registerToggleBar} ${!isLogin ? 'active' : ''}`}
                        style={registerStyle}
                        onClick={() => toggleActive('register')}
                    >
                        <h2>Register</h2>
                    </button>
                </div>
                { isLogin ? (
                    <div className={`${isLogin ? styles.loginContainer : styles.registerContainer}`}>
                        <img className={styles.logo} src="/FindMyULogo.jpg" alt="FindMyU Logo" />
                        <h1 className={styles.loginTitle}>Login</h1>
                        <form className={styles.loginForm} onSubmit={handleLogin}>
                            <input className={styles.loginInput} type="text" name="username" placeholder="Username" required />
                            <input 
                                className={styles.loginInput} 
                                type="password"
                                name="password" 
                                placeholder="Password" 
                                required 
                            />
                            <div className={styles.rememberForget}>
                                <label>
                                    <input
                                        type="checkbox" 
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                    Remember me
                                </label>
                                <a href="/login/forgot-password"> Forgot password?</a>
                            </div>
                            <button className={styles.loginButton} type="submit">Login</button>
                        </form>
                    </div>
                ) : (
                    <div className={styles.registerContainer}>
                        <img className={styles.logo} src="/FindMyULogo.jpg" alt="FindMyU Logo" />
                        <h1 className={styles.registerTitle}>Register</h1>
                        <form className={styles.registerForm} onSubmit={handleRegister}>
                            <input className={styles.registerInput} type="text" name="fullName" placeholder="Full Name" required />
                            <input className={styles.registerInput} type="email" name="email" placeholder="Email" required />
                            <input className={styles.registerInput} type="text" name="username" placeholder="Username" required />
                            <input className={styles.registerInput} type="password" name="password" placeholder="Password" required />

                            <button className={styles.registerButton} type="submit">Register</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
}