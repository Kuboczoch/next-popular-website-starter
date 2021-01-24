import Image from 'next/image'
import { Asset } from 'contentful'

/* @example
  <ContentfulImage {...data.fields.icon} />
  Where `data.fields.icon` contains an Asset from Contentful
*/
const ContentfulImage = (props: Asset) => (
  <Image
    src={'https:' + props.fields.file.url}
    alt={props.fields.title}
    width={props.fields.file.details.image.width}
    height={props.fields.file.details.image.height}
  />
)

export default ContentfulImage
