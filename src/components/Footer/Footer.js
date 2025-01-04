"use client";

import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
                <footer>
                    <p>&copy; 2025 FindMyU. All rights reserved.</p>
                    <p>Created by <a className={styles.linkedin} href="https://www.linkedin.com/in/ethan-crall/">Ethan Crall</a></p>
                </footer>
        </div>
    );
}