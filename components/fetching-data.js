import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function FetchingData() {
    const [contacts, setContact] = useState([]);

    useEffect(()=>{
        axios.get('./contact-info.json')
            .then(response => {
                console.log(response)
                setContact(response.data)
            })
    })

    return (
        <div>
            <ul>
                {contacts.map(contacts => (<li>{contacts}</li>)
                )}
            </ul>
        </div>
    )
}

export default FetchingData