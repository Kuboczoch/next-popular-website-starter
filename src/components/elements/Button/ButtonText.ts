import styled from '@emotion/styled'

import theme from '../../../assets/theme'
import { includeVariant, TIncludeVariantProps } from './variants'
import { changeOpacityOnLoading } from './LoaderContainer'

const ButtonText = styled('span')<TIncludeVariantProps & { isLoading?: boolean }>`
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  overflow-wrap: break-word;
  transition: all ${theme.transitions.normal};

  ${(props) => props.isLoading && changeOpacityOnLoading};

  ${(props) => includeVariant(props, 'text')};
`

export default ButtonText
