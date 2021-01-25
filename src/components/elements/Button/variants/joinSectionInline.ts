import { css } from 'styled-components'

import hexToRGB from '../../../../utils/hexToRGB'
import colors from './_colors'
import theme from '../../../../assets/theme'
import { stateProps } from './index'

const joinSectionInline = (props: stateProps) => ({
  button: css`
    box-shadow: 0 4px 20px 0 ${hexToRGB(colors[props.color.unset], 0.3)};
    border: 2px solid ${colors[props.color.unset]};
    background: ${colors[props.color.unset]};
    padding: 16px 30px;
    border-radius: 3px;
    transition: all ${theme.constants.transition.normal};

    &:hover {
      box-shadow: 0 4px 20px 0 ${hexToRGB(colors[props.color.hover], 0.5)};
    }

    &:active {
      opacity: 0.7;
    }

    ${props => props.disabled && css`
      box-shadow: unset !important;
      background: ${theme.colors.alto} !important;
      border-color: ${theme.colors.alto} !important;
    `};
  `,
  text: css`
    color: ${theme.colors.white};
  `
})

export default joinSectionInline
