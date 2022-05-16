import React from 'react'

import type { IHomePageProps } from '$/pages'

import HomePageView from './HomePageView'
import useHomePage from './useHomePage'

const HomePage = (props: IHomePageProps) => {
  const state = useHomePage(props)
  return <HomePageView {...props} {...state} />
}

export default HomePage
