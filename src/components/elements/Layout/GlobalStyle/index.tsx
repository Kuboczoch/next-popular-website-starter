import { injectGlobal } from '@emotion/css'

import animationsStyle from './animationsStyle'
import resetStyle from './resetStyle'

const GlobalStyle = injectGlobal`
  ${resetStyle};

   html {
     overflow-y: scroll;
   }

   body {
     font-family: 'Lato', sans-serif;
     font-size: 16px;
     line-height: 1.2;
     color: #333333;
     overflow-x: hidden;
     font-weight: 400;
   }
 
  ${animationsStyle};
`

export default GlobalStyle
