import styles from '../styles/Home.module.css';
import Head from 'next/head'
export default function services() {
    return (
        <>
            <div className={styles.container}>
                <Head>
                <title>Services</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                </Head>

                <section className={styles.section}>
                <h1 className={styles.title}>
                    Welcome to <a href="#">JSSTACK Services PAGE!</a>
                </h1>
                </section>
            </div>
        </>
    );
};