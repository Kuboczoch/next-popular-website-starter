import { css } from '@emotion/css'

import { variantProps } from './index'

import colors from './_colors'
import hexToRGB from '../../../../utils/hexToRGB'
import theme from '../../../../assets/theme'

const secondary = (props: variantProps) => ({
  button: css`
    border: 2px solid ${colors[props.color.unset]};
    background: transparent;
    padding: 16px 30px;
    border-radius: 3px;
    transition: all ${theme.transitions.normal};

    &:hover {
      box-shadow: 0 4px 20px 0 ${hexToRGB(colors[props.color.hover], 0.3)};
      background: ${colors[props.color.hover]};

      > span {
        color: ${colors[props.color.hover === 'white' ? 'black' : 'white']};
      }
    }

    &:active {
      box-shadow: 0 4px 20px 0 ${hexToRGB(colors[props.color.active], 0.3)};
      background: ${hexToRGB(colors[props.color.active], 0.5)};
    }

    ${props.disabled &&
    css`
      box-shadow: unset !important;
      background: transparent !important;
      border-color: ${theme.colors.alto} !important;

      > span {
        color: ${theme.colors.gray} !important;
      }
    `};
  `,
  text: css`
    color: ${colors[props.color.unset === 'white' ? 'white' : 'black']};
  `
})

export default secondary
