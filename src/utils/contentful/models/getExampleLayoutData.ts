// @ts-nocheck
import getOneContentfulData from '../getOneContentfulData'
import getContentfulData from '../getContentfulData'

import {
  IExampleLayout,
  IExampleHeader,
  IExampleFooter,
  IExampleButton
} from '../../../../@types/generated/contentful'

export interface IExampleLayoutData {
  layout: IExampleLayout
  header: IExampleHeader
  footer: IExampleFooter
  buttons: IExampleButton[]
}

const getExampleLayoutData = async (): Promise<IExampleLayoutData> => {
  const [layout, header, footer, buttons] = await Promise.all([
    getOneContentfulData<IExampleLayout>('layout'),
    getOneContentfulData<IExampleHeader>('header'),
    getOneContentfulData<IExampleFooter>('footer'),
    getContentfulData<IExampleButton>('button')
  ])

  return {
    layout,
    header,
    footer,
    buttons
  }
}

export default getExampleLayoutData
