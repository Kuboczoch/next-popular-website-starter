import React from 'react'

import Layout from '../components/elements/Layout'
import Homepage from '../containers/HomePage'

export interface HomePageProps {

}

const Home = (props: HomePageProps) => (
  <Layout {...props}>
    <Homepage {...props} />
  </Layout>
)

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default Home
