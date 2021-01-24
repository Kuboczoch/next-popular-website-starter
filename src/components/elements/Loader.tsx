import React from 'react'
import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderStyle = styled.span`
  display: inline-flex;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  overflow: hidden;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
  props.loaderColor ? props.loaderColor : '#000000'};
  border-top-color: transparent !important;
  animation: ${spinner} 1s linear infinite;
`

interface LoaderProps {
  loaderColor?: string,
  style?: object
}

const Loader = ({ loaderColor, ...props }: LoaderProps) => (
  <LoaderStyle loaderColor={loaderColor} {...props} />
)

export default Loader
