import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  // database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  },
  jwt: {
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
  },
  pages: {},
  callbacks: {},
  events: {},
  debug: (process.env.NODE_ENV == "development")
})
