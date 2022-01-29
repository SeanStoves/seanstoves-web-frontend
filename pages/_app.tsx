import {SessionProvider} from "next-auth/react"
import type {AppProps} from "next/app"
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from '../src/theme';
import NavBar from "../components/NavBar";
import * as React from "react";
import Footer from "../components/Footer";

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SessionProvider
                // Provider options are not required but can be useful in situations where
                // you have a short session maxAge time. Shown here with default values.
                session={pageProps.session}
            >
                <title>{(process.env.NODE_ENV == "development" ? process.env.NEXT_PUBLIC_SITE_NAME : process.env.SITE_NAME)}</title>
                <NavBar />
                <Component {...pageProps} />
                <Footer />
            </SessionProvider>
        </ThemeProvider>
    )
}
