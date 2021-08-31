// Declare Global imports
import { Provider } from 'next-auth/client'

import '../scss/global.scss'

function MyApp({ Component, pageProps }) {
  return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp
