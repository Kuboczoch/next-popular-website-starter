import Head from 'next/head'
import type { ReactChild } from 'react'
import React from 'react'

import Page from '$/components/blocks/Page'

import Footer from './Footer'
import Header from './Header'
import Providers from './Providers'

export interface LayoutProps {
  children: ReactChild
  title?: string
}

const Layout = ({
  title = 'Starter Website',
  children,
  ...props
}: LayoutProps) => (
  <Providers>
    <Head>
      <title>{title}</title>
    </Head>
    <Page>
      <Header {...props} />
      <Page.Content {...props} children={children} />
      <Footer {...props} />
    </Page>
  </Providers>
)

export default Layout
