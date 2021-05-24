import breakpoints from './breakpoints'
import colors from './colors'
import constants from './constants'
import gradients from './gradients'
import palette from './palette'
import shadows from './shadows'
import transitions from './transitions'

export interface ITheme {
  name: string
  breakpoints: typeof breakpoints
  colors: typeof colors
  constants: typeof constants
  gradients: typeof gradients
  palette: typeof palette
  shadows: typeof shadows
  transitions: typeof transitions
}

const theme = {
  name: 'Default theme',
  breakpoints,
  colors,
  constants,
  gradients,
  palette,
  shadows,
  transitions
}

export default theme
