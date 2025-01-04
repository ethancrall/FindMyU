"use client";

import styles from './activity.module.css';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';

export default function Activity() {
    return (
        <div>
            <Head>
                <title>Activity</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Navbar />

            <Footer />
        </div>
    );
}