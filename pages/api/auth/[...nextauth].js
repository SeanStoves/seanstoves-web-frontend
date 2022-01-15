import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
    },
    debug: process.env.DEBUGGING ?? false,
    secret: process.env.SECRET
})