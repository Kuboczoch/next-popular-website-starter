
const usePageTemplate = (pageName) => {
  return `import { I${pageName}PageProps } from '../../pages'

export interface I${pageName}PageStateProps {}

const use${pageName}Page = ({}: I${pageName}PageProps): I${pageName}PageStateProps => {
  return {}
}

export default use${pageName}Page
`
}

module.exports = usePageTemplate
