import theme from '../../../../assets/theme'
import { TColor } from '../../../../assets/theme/colors'
import { TPalletColor } from '../../../../assets/theme/palette'

export type possibleColors = TPalletColor | TColor

const colors: { [index in possibleColors]: string } = {
  ...theme.palette,
  ...theme.colors
}

export default colors
