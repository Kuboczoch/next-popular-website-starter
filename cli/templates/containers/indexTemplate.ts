const indexTemplate = (pageName) => {
  return `import React from 'react'

import { I${pageName}PageProps } from '../../pages/${pageName.toLowerCase()}'

import use${pageName}Page from './use${pageName}Page'
import ${pageName}PageView from './${pageName}PageView'

const ${pageName}Page = (props: I${pageName}PageProps) => {
  const state = use${pageName}Page(props)
  return <${pageName}PageView {...props} {...state} />
}

export default ${pageName}Page
`
}

export default indexTemplate
