import React from 'react'

import useHomePage from './useHomePage'
import HomePageView from './HomePageView'

const HomePage = (props) => {
  const state = useHomePage(props)
  return <HomePageView {...props} {...state} />
}

export default HomePage
