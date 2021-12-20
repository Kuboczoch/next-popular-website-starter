import Image from 'next/image'
import { Asset } from 'contentful'

/**
 * An easy way to include Contentful Image with Next.js Image tag
 *
 * @example
 * Where `data.fields.icon` contains an Asset from Contentful
 * <ContentfulImage {...data.fields.icon} />
 **/
const ContentfulImage = (props: Asset) => {
  if (!props.fields.file.details.image?.width) {
    return null
  }

  return (
    <Image
      src={'https:' + props.fields.file.url}
      alt={props.fields.title}
      width={props.fields.file.details.image?.width}
      height={props.fields.file.details.image?.height}
    />
  )
}

export default ContentfulImage
