/** @return rgb code or in case of failure initial value **/
function hexToRGB(hex: string, alpha?: number): string {
  try {
    if (!(hex[0] === '#' && hex.length === 7)) {
      return hex
    }

    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)

    if (typeof alpha === 'number') {
      return `rgba(${r},${g},${b},${alpha})`
    }

    return `rgb(${r},${g},${b})`
  } catch (e) {
    /* istanbul ignore next */
    if (process?.env?.NODE_ENV === 'development') {
      console.error(e)
    }
    return hex
  }
}

export default hexToRGB
