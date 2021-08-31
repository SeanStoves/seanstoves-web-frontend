import styles from "../styles/Footer.module.css"
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <hr />
            <Navbar sticky="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://twitter.com/sstoves">Twitter</Nav.Link>
                        <Nav.Link href="https://www.facebook.com/sstoves">Facebook</Nav.Link>
                        <Nav.Link href="https://github.com/SeanStoves">GitHub</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/seanstoves">LinkedIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </footer>
    )
}