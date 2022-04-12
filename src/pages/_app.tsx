import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import React from 'react'

import theme from '$/assets/theme'
import GlobalStyle from '$/components/elements/Layout/GlobalStyle'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    {GlobalStyle}
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
