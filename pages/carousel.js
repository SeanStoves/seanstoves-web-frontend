import Layout from '../components/layout'
import {Carousel} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useSession} from "next-auth/client";
import AccessDenied from "../components/access-denied";

export default function Page () {
    const [ session, loading ] = useSession()
    const [ contact , setContact ] = useState()

    // Fetch content from protected route
    useEffect(()=>{
        axios.get('./contact-info.json')
            .then(response => {
                console.log(response)
                setContact(response.data)
            })
    })

    // When rendering client side don't display anything until loading is complete
    if (loading) return null

    // If no session exists, display access denied message
    if (!session) { return  <Layout><AccessDenied/></Layout> }

    return (
        <Layout>
        <div>
            <ul>
                {contact.map(contact => (<li>{contact.address.street}</li>))}
            </ul>
        </div>
        </Layout>
    )
}