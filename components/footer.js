import styles from "../styles/Footer.module.css"
import {Col, Container, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    FaTwitter,
    FaTwitch,
    FaGithub,
    FaFacebookF,
    FaLinkedinIn,
    FaDAndD,
    FaSteam
} from "react-icons/fa";

export default function Footer() {
   const [ contact , setContact ] = useState()

    // Fetch content from protected route
    useEffect(()=>{
        console.log('useEffect called');
        axios.get('./contact-info.json')
            .then(response => {
                console.log(response)
                setContact(response.data)
            })
    }, [])


    return (
        <footer className={styles.footer}>
            <hr/>
            <Container fluid>
                <Row>
                    <Col>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <ul className={styles.SocialNetwork}>
                            <li><a target="_blank" href="https://www.facebook.com/sstoves"><FaFacebookF/></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/seanstoves"><FaLinkedinIn/></a>
                            </li>
                            <li><a target="_blank" href="https://twitter.com/sstoves"><FaTwitter/></a></li>
                            <li><a target="_blank" href="https://github.com/SeanStoves"><FaGithub/></a></li>
                            <li><a target="_blank" href="https://www.dndbeyond.com/members/SolaoBajiuik"><FaDAndD/></a>
                            </li>
                            <li><a target="_blank" href="https://twitch.tv/solaobajiuik"><FaTwitch/></a></li>
                            <li><a target="_blank" href="https://steamcommunity.com/id/solaobajiuik"><FaSteam/></a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}