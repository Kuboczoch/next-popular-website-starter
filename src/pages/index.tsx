import React from 'react'

import Layout from '../components/elements/Layout'
import Homepage from '../containers/HomePage'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'

export interface IHomePageProps extends ILayoutData {

}

const Home = (props: IHomePageProps) => (
  <Layout {...props}>
    <Homepage {...props} />
  </Layout>
)

export const getStaticProps = async (): Promise<IHomePageProps> => {
  const layout = await getLayoutData()

  return {
    props: {
      layout
    }
  }
}

export default Home
