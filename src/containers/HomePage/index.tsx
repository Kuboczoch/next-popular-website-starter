import React from 'react'

import useHomePage from './useHomePage'
import HomePageView from './HomePageView'

const RegisterPage = (props) => {
  const state = useHomePage(props)
  return <HomePageView {...props} {...state} />
}

export default RegisterPage
