import React from 'react'

import Layout from '../components/elements/Layout'
import Homepage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'

export interface HomePageProps extends ILayoutData {

}

const Home = (props: HomePageProps) => (
  <Layout {...props}>
    <Homepage {...props} />
  </Layout>
)

export const getStaticProps = async () => {
  const layout = await getLayoutData()

  return {
    props: {
      layout
    }
  }
}

export default Home
