import styled from '@emotion/styled'
import { Meta } from '@storybook/react'
import React from 'react'

import Button from '../../src/components/elements/Button'
import Loader from '../../src/components/elements/Loader'
import variants from '../../src/components/elements/Button/variants'

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
    title: 'Button',
    icon: false,
    loader: <Loader />
  }
} as Meta

export const Template = (args) => <Button {...args} />

export const Variants = (args) => (
  <Wrapper>
    {Object.keys(variants).map((variant) => (
      <Button key={variant} {...args} variant={variant} />
    ))}
  </Wrapper>
)
