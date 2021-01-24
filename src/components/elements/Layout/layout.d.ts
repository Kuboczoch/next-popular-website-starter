import { ReactChild } from 'react'

import { ILayoutData } from '../../../utils/getLayoutData'

export interface LayoutProps extends ILayoutData {
  children: ReactChild
  title?: string
}
