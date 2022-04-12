import '@emotion/react'

import type { ITheme } from '$/assets/theme'

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
