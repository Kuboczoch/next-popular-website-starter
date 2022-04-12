import type ButtonText from '../ButtonText'
import type StyledButton from '../StyledButton'

import PrimaryButtonText from './primary/PrimaryButtonText'
import PrimaryStyledButton from './primary/PrimaryStyledButton'

export type possibleVariants = 'primary'

type TVariant = {
  Button: typeof StyledButton
  Text: typeof ButtonText
}

const variants: { [index in possibleVariants]: TVariant } = {
  primary: {
    Button: PrimaryStyledButton,
    Text: PrimaryButtonText,
  },
}

export default variants
