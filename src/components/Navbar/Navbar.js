"use client";

import Image from "next/image";
import styles from './navbar.module.css'

export default function Navbar() {
    const openNav = () => {
        document.getElementById("sidenavBar").style.width = "200px";
    };

    const closeNav = () => {
        document.getElementById("sidenavBar").style.width = "0";
    };

    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <span>
                    <img src="/FindMyULogo.jpg" alt="FindMyU Logo" className={styles.logo} width={200} height={60} onClick={() => location.href = '/'} />
                </span>
                <span className={styles.sidebarLogo} onClick={openNav}>&#9776;</span>
            </nav>

            <div id="sidenavBar" className={styles.sidenav}>
                <a className={styles.closebtn} onClick={closeNav}>&times;</a>
                <div className={styles.links}> 
                    <a href="/about">About</a>
                    <a href="/profile">Profile</a>
                    <a href="/activity">Activity</a>
                    <a href="/settings">Settings</a>
                    <a className={styles.login} href="/login">Login</a>
                </div>
            </div>
        </div>
    );
}