import { css } from '@emotion/css'

import colors from './_colors'
import { variantProps } from './index'

const transparent = (props: variantProps) => ({
  button: css`
    background: ${colors[props.color.unset]};
    padding: 16px 30px;
  `
})

export default transparent
