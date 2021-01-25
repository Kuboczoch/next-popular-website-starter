import { css } from 'styled-components'
import colors from './_colors'

const headerLink = (props) => ({
  button: css`
    background: ${colors[props.color.unset]};
    padding: 16px 30px;
    border-bottom: 2px solid transparent;
    transition: all ${props => props.theme.constants.transition.slow};

    &:hover {
      border-bottom: 2px solid ${colors[props.color.hover]};

      span {
        color: ${colors[props.color.hover]};
      }
    }

    &:active {
      border-bottom: 2px solid ${colors[props.color.active]};
    }

    &:focus {
      border-bottom: 2px solid ${colors[props.color.focus]};
    }
  `,
  text: css`
    &:hover {
      color: ${colors[props.color.hover]};
    }

    &:active {
      color: ${colors[props.color.hover]};
    }

    &:focus {
      color: ${colors[props.color.hover]};
    }
  `
})

export default headerLink
