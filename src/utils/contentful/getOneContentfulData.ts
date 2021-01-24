import getData from './getData'
// @ts-ignore
import { CONTENT_TYPE } from '../../../@types/generated/contentful'

const getOneContentfulData = async (contentType: CONTENT_TYPE) => {
  const data = await getData(contentType)

  /**
   *  JSON parse and stringify is used here to eliminate unexpected behavior from contentful
   **/
  return JSON.parse(JSON.stringify({
    fields: data[0].fields,
    sys: data[0].sys
  }))
}

export default getOneContentfulData
