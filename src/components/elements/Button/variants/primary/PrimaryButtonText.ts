import styled from '@emotion/styled'

import ButtonText from '../../ButtonText'

const PrimaryButtonText = styled(ButtonText)`
  color: ${(props) =>
    props.colorStates.unset === 'transparent'
      ? props.theme.colors.npwBase09
      : props.theme.colors.npwBase01};
`

export default PrimaryButtonText
