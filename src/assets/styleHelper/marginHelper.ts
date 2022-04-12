import { css } from '@emotion/css'

const smallVertical = css`
  margin: 8px 0;
`

const mediumVertical = css`
  margin: 16px 0;
`

const largeVertical = css`
  margin: 24px 0;
`

const marginHelper = {
  vertical: {
    small: smallVertical,
    medium: mediumVertical,
    large: largeVertical,
  },
}

export default marginHelper
