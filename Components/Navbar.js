import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <>
        <nav className={styles.nav}>
        <Link href={`/`} passHref>
            <a className={styles.nav_link} href="/">Home</a>
        </Link>
        <Link href={`/about`} passHref>
            <a className={styles.nav_link} href="/about">About</a>
        </Link>
        <Link href={`/services`} passHref>
            <a className={styles.nav_link} href="/services">Services</a>
        </Link>
        <Link href={`/features`} passHref>
            <a className={styles.nav_link} href="/features">Features</a>
        </Link>
        <Link href={`/contact`} passHref>
            <a className={styles.nav_link} href="/contact">Contact</a>
        </Link>
        </nav>
    </>
  );
}
