import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => (
  <HomePage>
    <h1>Hello my awesome template!</h1>
  </HomePage>
)

export default HomePageView
