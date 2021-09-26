import { GetStaticProps } from 'next'
import React from 'react'

import Layout from '../components/elements/Layout'
import HomePage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'

export interface IHomePageProps extends ILayoutData {}

const Home = (props: IHomePageProps) => (
  <Layout {...props}>
    <HomePage {...props} />
  </Layout>
)

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const layout = await getLayoutData()

  return {
    props: {
      layout
    }
  }
}

export default Home
