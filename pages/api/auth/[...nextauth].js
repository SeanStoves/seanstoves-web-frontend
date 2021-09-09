import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
    ],
    jwt: {
      signingKey: process.env.JWT_SIGNING_PRIVATE_KEY
    },
    debug: process.env.DEBUGGING ?? false
}

export default (req, res) => NextAuth(req, res, options)