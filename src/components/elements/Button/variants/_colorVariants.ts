import { colorStates } from './'

interface colorVariant {
  [key: string]: colorStates
}

const colorVariants: colorVariant = {
  primary: {
    unset: 'dodgerBlue',
    hover: 'azureRadiance',
    active: 'dodgerBlue',
    focus: 'dodgerBlue',
    disabled: 'gray'
  },
  secondary: {
    unset: 'dodgerBlue',
    hover: 'dodgerBlue',
    active: 'dodgerBlue',
    focus: 'dodgerBlue',
    disabled: 'transparent'
  },
  transparent: {
    unset: 'transparent',
    hover: 'transparent',
    active: 'transparent',
    focus: 'transparent',
    disabled: 'gray'
  },
  fullWhite: {
    unset: 'white',
    hover: 'white',
    active: 'white',
    focus: 'white',
    disabled: 'white'
  },
  socialButton: {
    unset: 'periwinkleGray',
    hover: 'periwinkleGray',
    active: 'periwinkleGray',
    focus: 'periwinkleGray',
    disabled: 'periwinkleGray'
  },
  greenPrimary: {
    unset: 'apple',
    hover: 'oliveDrab',
    active: 'apple',
    focus: 'apple',
    disabled: 'gray'
  },
  joinSectionButton: {
    unset: 'white',
    hover: 'oliveDrab',
    active: 'white',
    focus: 'white',
    disabled: 'white'
  },
  headerLink: {
    unset: 'transparent',
    hover: 'apple',
    active: 'apple',
    focus: 'apple'
  }
}

export default colorVariants
