import React from 'react'

import { IHomePageProps } from '../../pages'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => (
  <HomePage>
    <h1>next-popular-website-starter</h1>
  </HomePage>
)

export default HomePageView
