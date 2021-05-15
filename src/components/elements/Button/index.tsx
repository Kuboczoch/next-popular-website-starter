import React from 'react'
import Link, { LinkProps } from 'next/link'

import { colorStates } from './variants/_colors'
import { possibleVariants } from './variants'

import ButtonText from './ButtonText'
import IconContainer from './IconContainer'
import StyledButton from './StyledButton'
import StyledLink from './StyledLink'
import LoaderContainer from './LoaderContainer'

interface IButtonProps {
  children?: null
  title?: React.ReactNode
  icon?: React.ReactNode
  iconAlign?: 'left' | 'right'
  rounded?: boolean
  variant?: possibleVariants
  colorStates?: colorStates
  link?: LinkProps
  loader?: React.ReactNode
  isLoading?: boolean
  linkProps?: Record<string, unknown>
  buttonProps?: Record<string, unknown>
  textProps?: Record<string, unknown>
  disabled?: boolean
}

/**
 * @example
 *   <Button
 *     title='My Awesome title!'
 *     variant='outlined'
 *   />
 **/
const Button = ({ title, variant = 'primary', ...props }: IButtonProps) => {
  const ButtonComponent = () => (
    <StyledButton variant={variant} {...props} {...props.buttonProps}>
      <LoaderContainer isLoading={props.isLoading}>{props.loader}</LoaderContainer>
      {props.icon && (
        <IconContainer iconAlign={props.iconAlign} disableMargin={!title} {...props}>
          {props.icon}
        </IconContainer>
      )}
      {title && (
        <ButtonText variant={variant} {...props} {...props.textProps}>
          {title}
        </ButtonText>
      )}
    </StyledButton>
  )

  if (props.link) {
    return (
      <Link {...props.link} passHref>
        <StyledLink {...props.linkProps}>
          <ButtonComponent />
        </StyledLink>
      </Link>
    )
  }

  return <ButtonComponent />
}

const defaultProps: IButtonProps = {
  title: null,
  icon: null,
  iconAlign: 'right',
  variant: 'primary',
  rounded: false,
  link: undefined,
  loader: null,
  isLoading: false,
  linkProps: {},
  buttonProps: {},
  textProps: {}
}

Button.defaultProps = defaultProps

export default Button
