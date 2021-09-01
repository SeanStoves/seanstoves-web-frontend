import styles from "../styles/Footer.module.css"
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import * as ReactIcons from "react-icons/fa";
import {FaAt, FaPhone, FaMapPin} from "react-icons/fa";


export default function Footer() {
   const [ contact , setContact ] = useState([])

    function SocialList() {
        const elems = [];
        for (const social of (contact.social || [])) {
            const Icon = React.createElement(ReactIcons[social.icon], null);
            elems.push(<li key={social.icon}><a target="_blank" href={social.link}>{Icon}</a></li>)
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
                    <Col></Col>
                    <Col></Col>
                    <Col><p className={styles.ftInfo}><FaAt/>&nbsp;{contact.email}<br/><FaPhone/>&nbsp;{contact.phone}</p></Col>
                    <Col><p className={styles.ftInfo}><FaMapPin/>&nbsp;{(contact.address || {}).street}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(contact.address || {}).city}, {(contact.address || {}).state}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(contact.address || {}).zip}</p></Col>
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