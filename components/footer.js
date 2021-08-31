import Link from "next/link"
import styles from "../styles/Footer.module.css"
import packageJSON from "../package.json"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <a href="https://twitter.com/sstoves">Twitter</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://www.facebook.com/sstoves">Facebook</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://github.com/SeanStoves">GitHub</a>
                </li>
                <li className={styles.navItem}>
                    <a href="https://www.linkedin.com/in/seanstoves/">LinkedIn</a>
                </li>
            </ul>
        </footer>
    )
}