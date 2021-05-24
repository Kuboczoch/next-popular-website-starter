import colors, { TColor } from './colors'

export type TPalletColor = TColor | 'primary' | 'secondary'

const palette: {
  [index in TPalletColor]: string
} = {
  ...colors,
  primary: colors.apple,
  secondary: colors.dodgerBlue
}

export default palette
