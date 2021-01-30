export type TColor =
  'transparent' |
  'white' |
  'black' |
  'mercury' |
  'alto' |
  'gray' |
  'regentGray' |
  'silver' |
  'darkBlue' |
  'dodgerBlue' |
  'periwinkleGray' |
  'baliHai' |
  'solitude' |
  'apple' |
  'madang' |
  'mantis' |
  'thunderbird' |
  'toreaBay' |
  'azureRadiance' |
  'oliveDrab' |
  'mineShaft'

/**
 List of possible colors in your app.
 This is used for better color management and suggestions from your *Editor*.
 You should *avoid* using it directly if there is a color in your palette that represents it; like `primary` or `secondary`.

 Every index must have a comment: `@color #ffffff rgb(255,255,255)` with a hex value that represents a color.
 It helps to identify the desired color from this list.
 **/

const colors: {
  [index in TColor]: string
} = {
  // @color transparent
  transparent: 'transparent',
  // @color #ffffff rgb(255,255,255)
  white: '#ffffff',
  // @color #000000 rgb(0,0,0)
  black: '#000000',
  // @color #E5E5E5 rgb(229,229,229)
  mercury: '#E5E5E5',
  // @color #E0E0E0 rgb(224,224,224)
  alto: '#e0e0e0',
  // @color #828282 rgb(130,130,130)
  gray: '#828282',
  // @color #8392a6 rgb(131,146,166)
  regentGray: '#8392a6',
  // @color #C4C4C4 rgb(196,196,196)
  silver: '#C4C4C4',
  // @color #071332 rgb(7,19,50)
  darkBlue: '#071332',
  // @color #39A5FF rgb(57,165,255)
  dodgerBlue: '#39A5FF',
  // @color #CBDDEC rgb(203,221,236)
  periwinkleGray: '#cbddec',
  // @color #7D94A8 rgb(125,148,168)
  baliHai: '#7D94A8',
  // @color #EBF6FF rgb(235,246,255)
  solitude: '#EBF6FF',
  // @color #68B73F rgb(104,183,63)
  apple: '#68B73F',
  // @color #C3F1AB rgb(195,241,171)
  madang: '#C3F1AB',
  // @color #70C445 rgb(112,196,69)
  mantis: '#70C445',
  // @color #BC1616 rgb(188,22,22)
  thunderbird: '#BC1616',
  // @color #0b2e8e rgb(11,46,142)
  toreaBay: '#0b2e8e',
  // @color #008BFF rgb(0,139,255)
  azureRadiance: '#008BFF',
  // @color #478825 rgb(71,136,37)
  oliveDrab: '#478825',
  // @color #333333 rgb(51,51,51)
  mineShaft: '#333333'
}

export default colors
