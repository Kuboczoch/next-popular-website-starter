import styled from 'styled-components'

import Content from './Content'
import Footer from './Footer'
import Header from './Header'

const Page = styled('div')`
  display: grid;
  min-height: 100vh;
  width: 100%;

  background: ${props => props.theme.colors.solitude};

  grid-template-columns: auto;
  grid-template-areas:
    'nav'
    'content'
    'footer';
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-rows: 5px auto auto;
  }
`

Page.Content = Content
Page.Footer = Footer
Page.Header = Header

export default Page
