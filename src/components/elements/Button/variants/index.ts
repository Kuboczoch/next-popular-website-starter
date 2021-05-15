import { colorStates } from './_colors'
import colorVariants from './_colorVariants'

import primary from './primary'
import secondary from './secondary'
import transparent from './transparent'

export interface variantProps {
  color: colorStates
  disabled?: boolean
}

export type possibleVariants = 'primary' | 'secondary' | 'transparent'

const variants = (props: {
  colorStates?: colorStates
}): { [index in possibleVariants]: { button?: any; text?: any } } => ({
  primary: primary({
    color: {
      ...colorVariants.primary,
      ...props.colorStates
    }
  }),
  secondary: secondary({
    color: {
      ...colorVariants.secondary,
      ...props.colorStates
    }
  }),
  transparent: transparent({
    color: {
      ...colorVariants.transparent,
      ...props.colorStates
    }
  })
})

export type TIncludeVariantProps = {
  colorStates?: colorStates
  variant: possibleVariants
}

export const includeVariant = (
  props: { colorStates?: colorStates; variant: possibleVariants },
  element: string
) => {
  return variants(props)[props.variant][element]
}

export default variants
