import { ThemeProvider } from '@emotion/react'
import { addDecorator } from '@storybook/react'

import GlobalStyle from '../src/components/elements/Layout/GlobalStyle'
import theme from '../src/assets/theme/index'

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {GlobalStyle}
    {story()}
  </ThemeProvider>
))

const customViewports = {
  iphoneX: {
    name: 'iphoneX',
    styles: {
      width: '375px',
      height: '635px'
    }
  },
  ipad: {
    name: 'ipad',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  ipadPro: {
    name: 'ipadPro',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  laptopL: {
    name: 'laptopL',
    styles: {
      width: '1440px',
      height: '1024px'
    }
  },
  desktopFHD: {
    name: 'desktopFHD',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: customViewports
  }
}
