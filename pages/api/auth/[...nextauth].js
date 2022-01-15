import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";


const options = {
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
}

export default (req, res) => NextAuth(req, res, options)