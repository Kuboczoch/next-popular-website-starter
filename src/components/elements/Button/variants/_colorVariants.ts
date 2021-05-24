import { TPalletColor } from '../../../../assets/theme/palette'

export type colorStates = {
  unset: TPalletColor
  hover: TPalletColor
  active: TPalletColor
  focus: TPalletColor
  disabled: TPalletColor
}

interface colorVariant {
  [key: string]: colorStates
}

const colorVariants: colorVariant = {
  primary: {
    unset: 'primary',
    hover: 'primary',
    active: 'primary',
    focus: 'primary',
    disabled: 'gray'
  },
  secondary: {
    unset: 'secondary',
    hover: 'secondary',
    active: 'secondary',
    focus: 'secondary',
    disabled: 'transparent'
  },
  transparent: {
    unset: 'transparent',
    hover: 'transparent',
    active: 'transparent',
    focus: 'transparent',
    disabled: 'gray'
  }
}

export default colorVariants
