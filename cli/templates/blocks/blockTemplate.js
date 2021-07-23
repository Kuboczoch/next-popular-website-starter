
const blockTemplate = (pageName) => {
  return `import styled from '@emotion/styled'

const ${pageName}Page = styled('div')\`\`

export default ${pageName}Page
`
}

module.exports = blockTemplate
