import getData from './getData'
// @ts-ignore
import { CONTENT_TYPE } from '../../../@types/generated/contentful'

const getContentfulData = async (contentType: CONTENT_TYPE) => {
  const data = await getData(contentType)

  // JSON parse and stringify is used here to eliminate unexpected behavior from contentful
  return Object.values(
    JSON.parse(JSON.stringify({
      ...data
    }))
  )
}

export default getContentfulData
