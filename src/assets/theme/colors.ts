export type TColor =
  | 'transparent'
  | 'npwBase01'
  | 'npwBase02'
  | 'npwBase03'
  | 'npwBase04'
  | 'npwBase05'
  | 'npwBase06'
  | 'npwBase07'
  | 'npwBase08'
  | 'npwBase09'
  | 'npwPrimary'
  | 'npwPrimaryHover'
  | 'npwPrimaryActive'
  | 'npwPrimaryText'
  | 'npwSecondary'
  | 'npwSecondaryHover'
  | 'npwSecondaryActive'
  | 'npwAccent'
  | 'npwAccentHover'
  | 'npwAccentActive'
  | 'npwAccentText'
  | 'npwSelection'
  | 'npwFocus'
  | 'npwClear'
  | 'npwClearDisabled'
  | 'npwClearHover'
  | 'npwClearActive'
  | 'npwClearInverse'
  | 'npwClearInverseHover'
  | 'npwClearInverseActive'
  | 'npwErrorFill'
  | 'npwErrorBg'
  | 'npwErrorBgHover'
  | 'npwSuccessFill'
  | 'npwSuccessBg'
  | 'npwSuccessBgHover'
  | 'npwWarningFill'
  | 'npwWarningBg'
  | 'npwWarningBgHover'
  | 'npwInfoFill'
  | 'npwInfoBg'
  | 'npwInfoBgHover'
  | 'npwNeutralFill'
  | 'npwNeutralBg'
  | 'npwNeutralBgHover'
  | 'npwText01'
  | 'npwText02'
  | 'npwText03'
  | 'npwLink'
  | 'npwLinkHover'
  | 'npwPositive'
  | 'npwPositiveHover'
  | 'npwNegative'
  | 'npwNegativeHover'
  | 'npwErrorFillNight'
  | 'npwErrorBgNight'
  | 'npwErrorBgNightHover'
  | 'npwSuccessFillNight'
  | 'npwSuccessBgNight'
  | 'npwSuccessBgNightHover'
  | 'npwWarningFillNight'
  | 'npwWarningBgNight'
  | 'npwWarningBgNightHover'
  | 'npwInfoFillNight'
  | 'npwInfoBgNight'
  | 'npwInfoBgNightHover'
  | 'npwNeutralFillNight'
  | 'npwNeutralBgNight'
  | 'npwNeutralBgNightHover'
  | 'npwText01Night'
  | 'npwText02Night'
  | 'npwText03Night'
  | 'npwLinkNight'
  | 'npwLinkNightHover'
  | 'npwPositiveNight'
  | 'npwPositiveNightHover'
  | 'npwNegativeNight'
  | 'npwNegativeNightHover'
  | 'npwSupport01'
  | 'npwSupport02'
  | 'npwSupport03'
  | 'npwSupport04'
  | 'npwSupport05'
  | 'npwSupport06'
  | 'npwSupport07'
  | 'npwSupport08'
  | 'npwSupport09'
  | 'npwSupport10'
  | 'npwSupport11'
  | 'npwSupport12'
  | 'npwSupport13'
  | 'npwSupport14'
  | 'npwSupport15'
  | 'npwSupport16'
  | 'npwSupport17'
  | 'npwSupport18'
  | 'npwSupport19'
  | 'npwSupport20'
  | 'npwSupport21'
  | 'npwSupport22'

/**
 List of possible colors in your app.
 This is used for better color management and suggestions from your *Editor*.
 **/

const colors: {
  [index in TColor]: string
} = {
  transparent: 'transparent',
  npwBase01: '#fff',
  npwBase02: '#f6f6f6',
  npwBase03: '#ededed', // basic border
  npwBase04: '#d7d7d7', // hovered borders
  npwBase05: '#b0b0b0', // interface icons
  npwBase06: '#959595', // hovered interface icons
  npwBase07: '#808080', // inverted background
  npwBase08: '#333', // dark interface icons
  npwBase09: '#000', // icons on inverted background
  npwPrimary: '#526ed3', // primary buttons, background
  npwPrimaryHover: '#6c86e2', // primary buttons hover
  npwPrimaryActive: '#314692', // primary buttons hover
  npwPrimaryText: '#fff', // text on primary background
  npwSecondary: '#ebefff', // inputs and secondary buttons
  npwSecondaryHover: '#dfe3f3', // inputs and secondary buttons hover
  npwSecondaryActive: '#d8ddf2', // inputs and secondary buttons pressed
  npwAccent: '#ff8078', // fill and outline of accent elements
  npwAccentHover: '#ff9a94', // accent elements hover
  npwAccentActive: '#e7716a', // accent elements pressed
  npwAccentText: '#fff', // text on accent background
  npwSelection: 'rgba(112, 182, 246, 0.12)', // selected text background
  npwFocus: 'rgba(51, 51, 51, 0.64)', // focus ring color
  npwClear: 'rgba(0, 0, 0, 0.08)', // translucent dark fill
  npwClearDisabled: 'rgba(0, 0, 0, 0.04)', // translucent dark fill disabled
  npwClearHover: 'rgba(0, 0, 0, 0.16)', // translucent dark fill hover
  npwClearActive: 'rgba(0, 0, 0, 0.2)', // translucent dark fill pressed
  npwClearInverse: 'rgba(255, 255, 255, 0.16)', // translucent light fill
  npwClearInverseHover: 'rgba(255, 255, 255, 0.24)', // translucent light fill hover
  npwClearInverseActive: 'rgba(255, 255, 255, 0.4)', // translucent light fill pressed
  // Statuses
  npwErrorFill: 'rgba(244, 87, 37, 1)', // icons and decorative elements with error status
  npwErrorBg: 'rgba(244, 87, 37, 0.12)', // translucent error background
  npwErrorBgHover: 'rgba(244, 87, 37, 0.24)', // translucent hover error background
  npwSuccessFill: 'rgba(74, 201, 155, 1)', // icon and decorative elements with success status
  npwSuccessBg: 'rgba(74, 201, 155, 0.12)', // translucent success background
  npwSuccessBgHover: 'rgba(74, 201, 155, 0.24)', // translucent success hover
  npwWarningFill: 'rgba(255, 199, 0, 1)', // icon and decorative elements with warning status
  npwWarningBg: 'rgba(255, 199, 0, 0.12)', // translucent warning background
  npwWarningBgHover: 'rgba(255, 199, 0, 0.24)', // translucent warning background
  npwInfoFill: 'rgba(112, 182, 246, 1)', // icon and decorative elements with info status
  npwInfoBg: 'rgba(112, 182, 246, 0.12)', // translucent info background
  npwInfoBgHover: 'rgba(112, 182, 246, 0.24)', // translucent info background
  npwNeutralFill: 'rgb(121, 129, 140)', // icon and decorative elements with neutral status
  npwNeutralBg: 'rgba(121, 129, 140, 0.12)', // translucent info background
  npwNeutralBgHover: 'rgba(121, 129, 140, 0.24)', // translucent info background
  // Text
  npwText01: 'rgba(27, 31, 59, 1)',
  npwText02: 'rgba(27, 31, 59, 0.65)',
  npwText03: 'rgba(27, 31, 59, 0.4)',
  npwLink: '#526ed3',
  npwLinkHover: '#6c86e2',
  npwPositive: '#3aa981',
  npwPositiveHover: '#7ac5aa',
  npwNegative: '#dd4c1e',
  npwNegativeHover: '#e38163',
  // Modifiers for dark background
  npwErrorFillNight: 'rgba(255, 140, 103, 1)',
  npwErrorBgNight: 'rgba(244, 87, 37, 0.32)',
  npwErrorBgNightHover: 'rgba(244, 87, 37, 0.4)',
  npwSuccessFillNight: 'rgb(74, 201, 155)',
  npwSuccessBgNight: 'rgba(74, 201, 155, 0.32)',
  npwSuccessBgNightHover: 'rgba(74, 201, 155, 0.4)',
  npwWarningFillNight: 'rgb(255, 199, 0)',
  npwWarningBgNight: 'rgba(255, 199, 0, 0.32)',
  npwWarningBgNightHover: 'rgba(255, 199, 0, 0.4)',
  npwInfoFillNight: 'rgb(112, 182, 246)',
  npwInfoBgNight: 'rgba(112, 182, 246, 0.32)',
  npwInfoBgNightHover: 'rgba(112, 182, 246, 0.4)',
  npwNeutralFillNight: 'rgb(149, 155, 164)',
  npwNeutralBgNight: 'rgb(149, 155, 164, 0.32)',
  npwNeutralBgNightHover: 'rgb(149, 155, 164, 0.48)',
  //
  npwText01Night: 'rgba(255, 255, 255, 1)',
  npwText02Night: 'rgba(255, 255, 255, 0.72)',
  npwText03Night: 'rgba(255, 255, 255, 0.6)',
  npwLinkNight: '#6788ff',
  npwLinkNightHover: '#526ed3',
  npwPositiveNight: '#44c596',
  npwPositiveNightHover: '#3aa981',
  npwNegativeNight: '#ff8c67',
  npwNegativeNightHover: '#bb593a',
  //
  npwSupport01: '#a8cef1',
  npwSupport02: '#3682db',
  npwSupport03: '#8dda71',
  npwSupport04: '#34b41f',
  npwSupport05: '#e29398',
  npwSupport06: '#b8474e',
  npwSupport07: '#fcc068',
  npwSupport08: '#ff8a00',
  npwSupport09: '#dab3f9',
  npwSupport10: '#7b439e',
  npwSupport11: '#fee797',
  npwSupport12: '#fcbb14',
  npwSupport13: '#ea97c4',
  npwSupport14: '#bd65a4',
  npwSupport15: '#7fd7cc',
  npwSupport16: '#2fad96',
  npwSupport17: '#d4aca2',
  npwSupport18: '#9d6f64',
  npwSupport19: '#d2e9a2',
  npwSupport20: '#aadc42',
  npwSupport21: '#a0c5df',
  npwSupport22: '#3c7ba8'
}

export default colors
