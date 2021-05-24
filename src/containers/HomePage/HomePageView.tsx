import React from 'react'

import { IHomePageProps } from '../../pages/index'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'
import Button from '../../components/elements/Button'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => (
  <HomePage>
    <Button title='test' variant='primary' />
  </HomePage>
)

export default HomePageView
