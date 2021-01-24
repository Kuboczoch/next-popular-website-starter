import getOneContentfulData from '../getOneContentfulData'
import getContentfulData from '../getContentfulData'
// @ts-ignore
import { IExampleButton, IExampleFooter, IExampleFooterLink, IExampleHeader, IExampleLayout } from '../../../../@types/generated/contentful'

export interface IExampleLayoutData {
  layout: IExampleLayout,
  header: IExampleHeader,
  footer: IExampleFooter,
  footerLinks: IExampleFooterLink[],
  buttons: IExampleButton[]
}

const getExampleLayoutData = async (): Promise<IExampleLayoutData> => {
  const [layout, header, footer, footerLinks, buttons] = await Promise.all([
    getOneContentfulData('layout') as Promise<IExampleLayout>,
    getOneContentfulData('header') as Promise<IExampleHeader>,
    getOneContentfulData('footer') as Promise<IExampleFooter>,
    getContentfulData('footerLink') as Promise<IExampleFooterLink[]>,
    getContentfulData('button') as Promise<IExampleButton[]>
  ])

  return {
    layout,
    header,
    footer,
    footerLinks,
    buttons
  }
}

export default getExampleLayoutData
