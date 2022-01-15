// Declare Global imports
import { SessionProvider } from 'next-auth/react'
import SSRProvider from 'react-bootstrap/SSRProvider';

import '../scss/global.scss'

function MyApp({ Component, pageProps }) {
  return (
      <SSRProvider>
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
      </SSRProvider>
  )
}

export default MyApp
