import {SessionProvider} from "next-auth/react"
import SSRProvider from 'react-bootstrap/SSRProvider';

export default function MyApp({
                                  Component,
                                  pageProps: {session, ...pageProps},
                              }) {
    return (
        <SSRProvider>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </SSRProvider>
    )
}
