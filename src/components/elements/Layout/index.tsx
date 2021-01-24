import React from 'react'
import Head from 'next/head'

import { LayoutProps } from './layout'
import Providers from './Providers'

import Page from '../../blocks/Page'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ title = 'Starter Website', children, ...props }: LayoutProps) => (
  <Providers>
    <Head>
      <title>{title}</title>
    </Head>
    <Page>
      <Header {...props} />
      <Page.Content {...props}>
        {children}
      </Page.Content>
      <Footer {...props} />
    </Page>
  </Providers>
)

export default Layout
