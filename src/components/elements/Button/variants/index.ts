import { possibleColors } from './_colors'
import colorVariants from './_colorVariants'

import inline from './inline'
import outline from './outline'
import transparent from './transparent'

export interface colorStates {
  // Default color
  unset?: possibleColors
  // Color on Hover
  hover?: possibleColors
  // Color when active
  active?: possibleColors
  // Color when focused
  focus?: possibleColors
  // Color when disabled
  disabled?: possibleColors
}

export interface stateProps {
  color: colorStates
}

export type possibleVariants =
  'inline' |
  'outline' |
  'transparent'

const variants = (props: { colorStates?: colorStates }): { [index in possibleVariants]: { button?: any, text?: any } } => ({
  inline: inline({
    color: {
      ...colorVariants.primary,
      ...props.colorStates
    }
  }),
  outline: outline({
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

export const includeVariant = (props: { colorStates?: colorStates, variant: string }, element: string) => {
  return variants(props)[props.variant][element]
}

export default variants
