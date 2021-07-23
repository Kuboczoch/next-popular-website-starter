const pageViewTemplate = (pageName) => {
  return `import React from 'react'

import { I${pageName}PageProps } from '../../pages'
import { I${pageName}PageStateProps } from './use${pageName}Page'

import ${pageName}Page from '../../components/blocks/${pageName}Page'

interface I${pageName}PageViewProps extends I${pageName}PageProps, I${pageName}PageStateProps {}

const ${pageName}PageView = ({}: I${pageName}PageViewProps) => (
  <${pageName}Page>
    <h1>next-popular-website-starter</h1>
  </${pageName}Page>
)

export default ${pageName}PageView
`
}

export default pageViewTemplate
