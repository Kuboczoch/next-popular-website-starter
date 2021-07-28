import React from 'react'

import { ITestPageProps } from '../../pages/test'

import useTestPage from './useTestPage'
import TestPageView from './TestPageView'

const TestPage = (props: ITestPageProps) => {
  const state = useTestPage(props)
  return <TestPageView {...props} {...state} />
}

export default TestPage
