import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Header.module.css'
import Head from "next/head";
import { Navbar, Nav, Container} from "react-bootstrap";

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header () {
    const [ session, loading ] = useSession()

    return (
        <header>
            <Head>
                <title>Sean Stoves</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>

            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <Navbar.Brand href="#home">Sean Stoves</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/client">Client</Nav.Link>
                            <Nav.Link href="/server">Server</Nav.Link>
                            <Nav.Link href="/protected">Protected</Nav.Link>
                            <Nav.Link href="/api-example">API</Nav.Link>
                            <Nav.Link href="/carousel">Bootstrap Test</Nav.Link>
                        </Nav>
                        <Nav>
                            {!session && <>
                                <Nav.Link className={styles.buttonPrimary} onSelect={(e) => {
                                    e.preventDefault()
                                    signIn()
                                }} href="/api/auth/signin">Sign In</Nav.Link>
                            </>}
                            {session && <>
                                {session.user.image && <span style={{backgroundImage: `url(${session.user.image})` }} className={styles.avatar}/>}
                                <Nav.Link className={styles.button} onSelect={(e) => {
                                    e.preventDefault()
                                    signOut()
                                }} href="/api/auth/signout">Sign Out</Nav.Link>
                            </>}
                        </Nav>
                    </Navbar.Collapse>

            </Navbar>

            <div className={styles.signedInStatus}>
                <p className={`nojs-show ${(!session && loading) ? styles.loading : styles.loaded}`}>

                </p>
            </div>
            <nav>
                <ul className={styles.navItems}>
                    <li className={styles.navItem}><Link href="/"><a>Home</a></Link></li>
                    <li className={styles.navItem}><Link href="/client"><a>Client</a></Link></li>
                    <li className={styles.navItem}><Link href="/server"><a>Server</a></Link></li>
                    <li className={styles.navItem}><Link href="/protected"><a>Protected</a></Link></li>
                    <li className={styles.navItem}><Link href="/api-example"><a>API</a></Link></li>
                    <li className={styles.navItem}><Link href="/carousel"><a>Testing Bootstrap</a></Link></li>
                </ul>
            </nav>
        </header>
    )
}