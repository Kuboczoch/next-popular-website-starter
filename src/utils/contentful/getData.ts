import contentful from 'contentful'

// @ts-ignore
import { CONTENT_TYPE } from '../../../@types/generated/contentful'

const getData = async (contentType: CONTENT_TYPE) => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!(spaceId && accessToken)) {
    throw Error('Please configure your .env file with contentful or disable it for your project!')
  }

  const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
  })

  const TypeEntries = await client.getEntries({
    content_type: contentType
  })

  return TypeEntries.items
}

export default getData
