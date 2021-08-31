// Declare Global imports
import { Provider } from 'next-auth/client'


// Declare and Define global CSS Files
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
