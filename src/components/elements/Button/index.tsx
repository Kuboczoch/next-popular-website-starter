import React, { useMemo } from 'react'
import Link, { LinkProps } from 'next/link'

import variants, { possibleVariants } from './variants'

import IconContainer from './IconContainer'
import StyledLink from './StyledLink'
import LoaderContainer from './LoaderContainer'
import colorVariants, { colorStates } from './variants/_colorVariants'

interface IButtonProps {
  children?: null
  title?: React.ReactNode
  icon?: React.ReactNode
  iconAlign?: 'left' | 'right'
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
  const Variant = useMemo(() => {
    return variants[variant]
  }, [variant])

  const ButtonComponent = () => (
    <Variant.Button
      {...props}
      {...props.buttonProps}
      colorStates={props.colorStates || colorVariants[variant]}
    >
      <LoaderContainer isLoading={props.isLoading}>{props.loader}</LoaderContainer>
      {props.icon && (
        <IconContainer iconAlign={props.iconAlign} disableMargin={!title} {...props}>
          {props.icon}
        </IconContainer>
      )}
      {title && (
        <Variant.Text {...props} {...props.textProps}>
          {title}
        </Variant.Text>
      )}
    </Variant.Button>
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
  link: undefined,
  loader: null,
  isLoading: false,
  linkProps: {},
  buttonProps: {},
  textProps: {}
}

Button.defaultProps = defaultProps

export default Button
