import { css } from 'styled-components'

import colors from './_colors'
import { stateProps } from './index'

const transparent = (props: stateProps) => ({
  button: css`
    background: ${colors[props.color.unset]};
    padding: 16px 30px;
  `
})

export default transparent
