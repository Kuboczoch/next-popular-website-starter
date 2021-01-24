import { CONTENT_TYPE } from '../../../@types/generated/contentful'

const contentful = require('contentful')

const getContentfulData = async (contentType: CONTENT_TYPE) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const TypeEntries = await client.getEntries({
    content_type: contentType
  })

  return Object.values(
    JSON.parse(JSON.stringify({
      ...TypeEntries.items
    }))
  )
}

export default getContentfulData
