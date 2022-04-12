// @ts-nocheck
import type {
  IExampleLayout,
  IExampleHeader,
  IExampleFooter,
  IExampleButton,
} from '$/types/generated/contentful'

import getContentfulData from '../getContentfulData'
import getOneContentfulData from '../getOneContentfulData'

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
    getContentfulData<IExampleButton>('button'),
  ])

  return {
    layout,
    header,
    footer,
    buttons,
  }
}

export default getExampleLayoutData
