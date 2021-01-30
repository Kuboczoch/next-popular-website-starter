import React from 'react'

import { IHomePageProps } from '../../pages/index'
import { IHomePageStateProps } from './useHomePage'

import HomePage from '../../components/blocks/HomePage'

interface IHomePageViewProps extends IHomePageProps, IHomePageStateProps {

}

const HomePageView = (props: IHomePageViewProps) => (
  <HomePage />
)

export default HomePageView
