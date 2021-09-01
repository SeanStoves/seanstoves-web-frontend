import { signIn, useSession } from 'next-auth/client'
import headStyle from '../styles/Header.module.css'
import Head from "next/head";
import {Navbar, Nav, NavDropdown, Image } from "react-bootstrap";


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
                                <Nav.Link className={headStyle.buttonPrimary} onSelect={(e) => {
                                    e.preventDefault()
                                    signIn()
                                }} href="/api/auth/signin">Sign In</Nav.Link>
                            </>}
                            {session && <>
                                <NavDropdown eventkey={1} id="PersonalMenu" title={
                                    <div className="pull-left">
                                        <Image className={headStyle.avatar}
                                             src={session.user.image}
                                             alt="Click to see Personal Options"
                                        />
                                    </div>
                                }>
                                    <NavDropdown.Header>Welcome<br/><b>{session.user.name}</b></NavDropdown.Header>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/api/auth/signout">Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </>}
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>

            <div className={headStyle.signedInStatus}>
                <p className={`nojs-show ${(!session && loading) ? headStyle.loading : headStyle.loaded}`}></p>
            </div>
        </header>
    )
}