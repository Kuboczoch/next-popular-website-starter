import styled from '@emotion/styled'

import theme from '../../../assets/theme'
import { changeOpacityOnLoading } from './LoaderContainer'

const ButtonText = styled('span')<{ isLoading?: boolean }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  overflow-wrap: break-word;
  transition: all ${theme.transitions.normal};

  ${(props) => props.isLoading && changeOpacityOnLoading};
`

export default ButtonText
