import { ConfigProvider } from 'antd'
import 'styles/reset.css'
import 'styles/antd.css'

import type { AppProps } from 'next/app'

ConfigProvider.config({
  theme: {
    primaryColor: '#000'
  }
})

setTimeout(() => {
  ConfigProvider.config({
    theme: {
      primaryColor: 'green'
    }
  })
}, 3000)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
