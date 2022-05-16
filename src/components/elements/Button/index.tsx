import type { LinkProps } from 'next/link'
import Link from 'next/link'
import React, { useMemo } from 'react'

import IconContainer from './IconContainer'
import LoaderContainer from './LoaderContainer'
import StyledLink from './StyledLink'
import variants from './variants'
import type { possibleVariants } from './variants'
import type { colorStates } from './variants/_colorVariants'
import colorVariants from './variants/_colorVariants'

interface IButtonProps {
  children?: React.ReactNode
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
 *     variant='outlined'
 *   >
 *    My awesome text!
 *   </Button>
 **/
const Button = ({
  children = null,
  variant = 'primary',
  ...props
}: IButtonProps) => {
  const Variant = useMemo(() => {
    return variants[variant]
  }, [variant])

  const ButtonComponent = () => (
    <Variant.Button
      {...props}
      {...props.buttonProps}
      colorStates={(props.colorStates || colorVariants[variant]) as colorStates}
    >
      <LoaderContainer isLoading={props.isLoading}>
        {props.loader}
      </LoaderContainer>
      {props.icon && (
        <IconContainer iconAlign={props.iconAlign} {...props}>
          {props.icon}
        </IconContainer>
      )}
      {children && (
        <Variant.Text
          {...props}
          {...props.textProps}
          colorStates={
            (props.colorStates || colorVariants[variant]) as colorStates
          }
        >
          {children}
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
  children: 'Click me!',
  icon: null,
  iconAlign: 'right',
  variant: 'primary',
  link: undefined,
  loader: null,
  isLoading: false,
  linkProps: {},
  buttonProps: {},
  textProps: {},
}

Button.defaultProps = defaultProps

export default Button
