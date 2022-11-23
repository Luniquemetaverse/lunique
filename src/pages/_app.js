import '@/styles/globals.css'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import GetCurrentUser from '@/presets/elements/GetCurrentUser'
import AuthComponent from '@/components/auth'
import { NextSeo } from 'next-seo'
import '../utils/i18'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextSeo
        title="Lunique"
        description="An exclusive luxury marketplace in the realms of metaverse."
        canonical="https://lunique.io"
        openGraph={{
          url: 'https://lunique.io',
          title: 'Lunique',
          description:
            'An exclusive luxury marketplace in the realms of metaverse.',
          images: [
            {
              url: 'https://i.postimg.cc/c4SjKhVq/lunique-Card.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Lunique',
        }}
        twitter={{
          handle: '@Vaionex_Corp',
          site: '@Vaionex_Corp',
          cardType: 'summary_large_image',
        }}
      />
      
      <AuthComponent>
        <GetCurrentUser />
        <Component {...pageProps} />
      </AuthComponent>
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
