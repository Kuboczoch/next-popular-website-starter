import { TColor } from '../../../../assets/theme/colors'

export type colorStates = {
  unset: TColor
  hover: TColor
  active: TColor
  focus: TColor
  disabled: TColor
}

interface colorVariant {
  [key: string]: colorStates
}

const colorVariants: colorVariant = {
  primary: {
    unset: 'npwPrimary',
    hover: 'npwPrimaryHover',
    active: 'npwPrimaryActive',
    focus: 'npwPrimaryActive',
    disabled: 'npwPrimaryActive'
  },
  secondary: {
    unset: 'npwPositive',
    hover: 'npwPositiveHover',
    active: 'npwPositiveHover',
    focus: 'npwPositiveHover',
    disabled: 'npwSuccessBgNight'
  },
  transparent: {
    unset: 'transparent',
    hover: 'transparent',
    active: 'transparent',
    focus: 'transparent',
    disabled: 'transparent'
  }
}

export default colorVariants
