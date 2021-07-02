import styled from '@emotion/styled'

const Content = styled('main')`
  position: relative;
  grid-area: content;
  min-height: 125px;
  z-index: 1;

  background: ${(props) => props.theme.colors.npwBase01};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 125px;
  }
`

export default Content
