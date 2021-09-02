/* eslint-disable react/jsx-no-target-blank */
import styles from "../../styles/Footer.module.css"
import {Col, Container, Row, Button} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import * as ReactIcons from "react-icons/fa";
import {FaAt, FaPhone, FaMapMarkedAlt} from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
   const [ contact , setContact ] = useState([])

    function SocialList() {
        const elems = [];
        for (const social of (contact.social || [])) {
            const Icon = React.createElement(ReactIcons[social.icon], null);
            elems.push(<li key={social.icon}><a target="_blank" href={social.url}>{Icon}</a></li>)
        }
        return elems;
    }

    // Fetch content from protected route
    useEffect(()=>{
        axios.get('./contact-info.json')
            .then(response => {
                setContact(response.data)
            })
    }, [])

    return (
        <footer className={styles.footer}>
            <hr/>
            <Container fluid>
                <Row>
                    <Col md="4" className="text-md-center text-lg-center">
                        <Link href="https://www.dropbox.com/s/8ii0ni23zaxh0u8/SeanStoves-Resume2019.pdf?dl=1">
                            <Button variant="outline-light" size="lg">
                                Download Resume
                            </Button>
                        </Link>
                    </Col>
                    <Col><div className={styles.ftInfo}><div className={styles.SvgIcons}><FaAt/><p>{contact.email}</p></div><div className={styles.SvgIcons}><FaPhone/><p>{contact.phone}</p></div></div></Col>
                    <Col><div className={styles.ftInfo}><div className={styles.SvgIcons}><FaMapMarkedAlt/><p>{contact.address?.street}<br/>{contact.address?.city}, {contact.address?.state}<br/>{contact.address?.zip}</p></div></div></Col>
                    <Col className="align-items-center">
                        <ul className={styles.SocialNetwork}>
                            <SocialList />
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}