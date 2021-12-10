import getData from './getData'
import { CONTENT_TYPE } from '../../../@types/generated/contentful'

const getContentfulData = async <T>(contentType: CONTENT_TYPE): Promise<T[]> => {
  const data = await getData(contentType)

  /**
   *  JSON parse and stringify is used here to eliminate unexpected behavior from contentful
   **/
  return Object.values(
    JSON.parse(
      JSON.stringify({
        ...data
      })
    )
  )
}

export default getContentfulData
