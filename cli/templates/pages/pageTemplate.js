const pageTemplate = (pageName) => {
  return `import React from 'react'

import Layout from '../components/elements/Layout'
import ${pageName}Page from '../containers/${pageName}Page'
import getLayoutData, { ILayoutData } from '../utils/contentful/models/getLayoutData'

export interface I${pageName}PageProps extends ILayoutData {}

const ${pageName} = (props: I${pageName}PageProps) => (
  <Layout {...props}>
    <${pageName}Page {...props} />
  </Layout>
)

export const getStaticProps = async (): Promise<I${pageName}PageProps> => {
  const layout = await getLayoutData()

  return {
    props: {
      layout
    }
  }
}

export default ${pageName}
`
}

module.exports = pageTemplate
