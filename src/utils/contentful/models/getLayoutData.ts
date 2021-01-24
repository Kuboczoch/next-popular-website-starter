// import getOneContentfulData from '../getOneContentfulData'
// import { IButton, IFooter, IFooterLink, IHeader, ILayout } from '../../../../@types/generated/contentful'
// import getContentfulData from '../getContentfulData'
//
// export interface ILayoutData {
//   layout: ILayout,
//   header: IHeader,
//   footer: IFooter,
//   footerLinks: IFooterLink[],
//   buttons: IButton[]
// }
//
// const getLayoutData = async (): Promise<ILayoutData> => {
//   const [layout, header, footer, footerLinks, buttons] = await Promise.all([
//     getOneContentfulData('layout') as Promise<ILayout>,
//     getOneContentfulData('header') as Promise<IHeader>,
//     getOneContentfulData('footer') as Promise<IFooter>,
//     getContentfulData('footerLink') as Promise<IFooterLink[]>,
//     getContentfulData('button') as Promise<IButton[]>
//   ])
//
//   return {
//     layout,
//     header,
//     footer,
//     footerLinks,
//     buttons
//   }
// }
//
// export default getLayoutData
