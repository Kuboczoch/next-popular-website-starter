import React, { ReactChild } from 'react'
import Head from 'next/head'

import Providers from './Providers'

import Page from '../../blocks/Page'
import Header from './Header'
import Footer from './Footer'

import { ILayoutData } from '../../../utils/contentful/models/getLayoutData'

export interface LayoutProps extends ILayoutData {
  children: ReactChild
  title?: string
}

const Layout = ({ title = 'Starter Website', children, ...props }: LayoutProps) => (
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
