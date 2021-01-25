import colors from './colors'

export type TPalletColor =
  'primary' |
  'secondary'

const palette: {
  [index in TPalletColor]: string
} = {
  primary: colors.apple,
  secondary: colors.dodgerBlue
}

export default palette
