import styled from '@emotion/styled'
import { Meta } from '@storybook/react'
import React from 'react'

import marginHelper from '../../src/assets/styleHelper/marginHelper'
import Button from '../../src/components/elements/Button'
import colorVariants from '../../src/components/elements/Button/variants/_colorVariants'
import Loader from '../../src/components/elements/Loader'
import variants, { possibleVariants } from '../../src/components/elements/Button/variants'
import { TypographyP } from '../../src/components/elements/Typography'

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
      control: false
    },
    loader: {
      control: false
    }
  },
  args: {
    children: 'Click me!',
    icon: false,
    loader: <Loader />
  }
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
          <TypographyP className={marginHelper.vertical.medium}>{colorVariant}</TypographyP>
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
