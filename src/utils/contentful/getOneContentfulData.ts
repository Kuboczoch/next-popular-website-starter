import type { CONTENT_TYPE } from '$/types/generated/contentful'

import getData from './getData'

const getOneContentfulData = async <T>(
  contentType: CONTENT_TYPE,
): Promise<T> => {
  const data = await getData(contentType)

  /**
   *  JSON parse and stringify is used here to eliminate unexpected behavior from contentful
   **/
  return JSON.parse(
    JSON.stringify({
      fields: data[0]?.fields,
      sys: data[0]?.sys,
    }),
  )
}

export default getOneContentfulData
