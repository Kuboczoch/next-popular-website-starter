import styled from '@emotion/styled'
import type { Meta } from '@storybook/react'
import React from 'react'

import marginHelper from '$/assets/styleHelper/marginHelper'
import Button from '$/components/elements/Button'
import type { possibleVariants } from '$/components/elements/Button/variants'
import variants from '$/components/elements/Button/variants'
import colorVariants from '$/components/elements/Button/variants/_colorVariants'
import Loader from '$/components/elements/Loader'
import { TypographyP } from '$/components/elements/Typography'

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
`

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    icon: {
      control: false,
    },
    loader: {
      control: false,
    },
  },
  args: {
    children: 'Click me!',
    icon: false,
    loader: <Loader />,
  },
} as Meta

export const Template: React.FC = (args) => <Button {...args} />

export const Variants: React.FC = (args) => (
  <Wrapper>
    {(Object.keys(variants) as possibleVariants[]).map((variant) => (
      <Button key={variant} {...args} variant={variant} />
    ))}
  </Wrapper>
)

export const ColorVariants: React.FC = (args) => {
  const colorVariantsKeys = Object.keys(colorVariants)
  const variantsKeys = Object.keys(variants) as possibleVariants[]
  return (
    <>
      {colorVariantsKeys.map((colorVariant) => (
        <React.Fragment key={colorVariant}>
          <TypographyP className={marginHelper.vertical.medium}>
            {colorVariant}
          </TypographyP>
          <Wrapper>
            {variantsKeys.map((variant) => (
              <Button
                key={variant}
                {...args}
                variant={variant}
                colorStates={colorVariants[colorVariant]}
              />
            ))}
          </Wrapper>
        </React.Fragment>
      ))}
    </>
  )
}
