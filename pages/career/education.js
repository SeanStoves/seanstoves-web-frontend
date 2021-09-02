import React from 'react'
import { useSession } from 'next-auth/client'
import Layout from '../../components/design/layout'

export default function Page () {
    const [ session, loading ] = useSession()

    // When rendering client side don't display anything until loading is complete
    if (loading) return null

    // If session exists, display content
    return (
        <Layout>
            <h1>Educational</h1>

            List of Educational Resources / etc will be here:


        </Layout>
    )
}