"use client";

import styles from './about.module.css';
import Head from 'next/head';
import Navbar from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';

export default function About() {
    return (
        <>
            <Navbar />

            <Head>
                <title>About FindMyU</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <header>
                <h1 className={styles.aboutHeader}>Welcome to <div className={styles.findmyu}>FindMyU</div>!</h1>
                <p className={styles.aboutParagraph}>
                    Finding the <b>right</b> college is hard. You have to consider academic programs,
                    admission requirements, costs, scholarships, location, campus culture, job opportunities,
                    and many other elements to find the best fit for your personal, educational, and career goals.
                    This endless and complex decision making process requires extensive research and thoughtful
                    reflection. FindMyU is designed to simplify this journey by providing resources tailored to each
                    user's needs. With detailed information of various institutions across the United States, personalized
                    recommendations based on your preferences, and valuable insights into key decision-making criteria, we
                    empower you to make informed choices with confidence. Let us guide you through this pivotal step towards
                    your future career path with clarity and assurance!
                </p>
                <div className={styles.imageContainer}>
                    <a href="https://www.istockphoto.com/photos/smiling-graduates"><img src="/SmilingGraduates.jpg" alt="Graduation Smile Photo from iStock" className={styles.graduate}/></a>
                </div>
                <p className={styles.aboutParagraph}>
                    This website was designed by Ethan Crall, a student at the University of Tennessee in the Tickle College of Engineering. 
                    When applying to colleges in 2021, Ethan found the process to be overwhelming and confusing. He never had a "dream school"
                    that many of his other peers grew up wanting to attend. He was unsure of where he wanted to go and didn't know where to begin.
                    He created FindMyU to help students like him discover their perfect college fit and prepare for their future.
                </p>
                <div className={styles.imageContainer}>
                    <img src="/Ethan.jpg" alt="Graduation Smile Photo from iStock" className={styles.ethan}/>
                </div>
                <p className={styles.aboutParagraph}>
                    To learn more about Ethan, visit his <a className={styles.linkedin} href="https://www.linkedin.com/in/ethan-crall/">LinkedIn</a>.
                </p>
            </header>

            <Footer />
        </>
    );
}