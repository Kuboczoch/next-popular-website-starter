import hexToRGB from './index'

const hex1 = '#ffffff'
const hex2 = '#932626'
const hex3 = '#3a5cb2'
const notHex1 = '#000000000'
const notHex2 = '01233213'
const notHex3 = '1'
const notHex4 = 123
const notHex5 = undefined

describe('Unit Test | hexToRGB function', () => {
  test('Normal usage', () => {
    expect(hexToRGB(hex1)).toBe('rgb(255,255,255)')
    expect(hexToRGB(hex2)).toBe('rgb(147,38,38)')
    expect(hexToRGB(hex3)).toBe('rgb(58,92,178)')
    expect(hexToRGB(hex1, 0)).toBe('rgba(255,255,255,0)')
    expect(hexToRGB(hex2, 1)).toBe('rgba(147,38,38,1)')
    expect(hexToRGB(hex3, 0.75)).toBe('rgba(58,92,178,0.75)')
  })

  test('Incorrect hex', () => {
    // In case of failure return initial value
    expect(hexToRGB(notHex1)).toBe(notHex1)
    expect(hexToRGB(notHex2)).toBe(notHex2)
    expect(hexToRGB(notHex3)).toBe(notHex3)
    expect(hexToRGB(notHex4 as unknown as string)).toBe(notHex4)
    expect(hexToRGB(notHex5 as unknown as string)).toBe(notHex5)
  })
})
