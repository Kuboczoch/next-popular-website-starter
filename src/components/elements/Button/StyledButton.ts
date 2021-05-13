import styled from '@emotion/styled'

import { includeVariant, TIncludeVariantProps } from './variants'

const StyledButton = styled('div')<TIncludeVariantProps & { iconAlign?: 'left' | 'right' }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  flex-direction: ${(props) => (props.iconAlign === 'left' ? 'row' : 'row-reverse')};

  ${(props) => includeVariant(props, 'button')};
`

export default StyledButton
