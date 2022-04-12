import React from 'react'

import HomePage from '$/components/blocks/HomePage'
import type { IHomePageProps } from '$/pages'

import type { IHomePageStateProps } from './useHomePage'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {}

const HomePageView = ({}: IHomePageViewProps) => (
  <HomePage>
    <h1>next-popular-website-starter</h1>
  </HomePage>
)

export default HomePageView
