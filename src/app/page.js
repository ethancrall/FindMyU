"use client";

import styles from './home.module.css';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';

export default function Home() {
    return (
        <div>
            <Head>
                <title>FindMyU</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Navbar />

            <div className={styles.container}>
                <div className={styles.largeRectangle}>
                    <div className={styles.smallRectangle}>
                        <div className={styles.iconCircle}>
                            <div className={styles.heartIcon}>&#x2764;</div>
                        </div>
                        <div className={styles.iconCircle}>
                            <div className={styles.starIcon}>&#x2605;</div>
                        </div>
                        <div className={styles.iconCircle}>
                            <div className={styles.xIcon}>&times;</div>
                        </div>
                    </div>
                </div>
            </div>

            <main className={styles.main}>

            </main>

            <Footer />
        </div>
    );
}