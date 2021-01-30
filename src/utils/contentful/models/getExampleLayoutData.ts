import getOneContentfulData from '../getOneContentfulData'
import getContentfulData from '../getContentfulData'

import { IExampleLayout, IExampleHeader, IExampleFooter, IExampleButton } from '../../../../@types/generated/contentful'

export interface IExampleLayoutData {
  layout: IExampleLayout,
  header: IExampleHeader,
  footer: IExampleFooter,
  buttons: IExampleButton[]
}

const getExampleLayoutData = async (): Promise<IExampleLayoutData> => {
  const [layout, header, footer, buttons] = await Promise.all([
    getOneContentfulData('layout') as Promise<IExampleLayout>,
    getOneContentfulData('header') as Promise<IExampleHeader>,
    getOneContentfulData('footer') as Promise<IExampleFooter>,
    getContentfulData('button') as Promise<IExampleButton[]>
  ])

  return {
    layout,
    header,
    footer,
    buttons
  }
}

export default getExampleLayoutData
