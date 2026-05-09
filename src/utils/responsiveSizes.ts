import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window')
const guidelineBaseWidth = 350
const guidelineBaseHeight = 812

// Ipad device identify
export const isiPAD = height / width < 1.6

// Tablet device identify
export const isTablet = height / width < 1.6

// Platform IOS Identify
export const isIOS = Platform.OS === 'ios'

// Platform Android Identify
export const isAndroid = Platform.OS === 'android'

// Identify notch in IOS Device
export const isIphoneXorAbove = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    (height === 812 ||
      width === 812 ||
      height === 896 ||
      width === 896 ||
      width === 390 ||
      height === 844 ||
      width === 390 ||
      height === 852 ||
      width === 428 ||
      height === 926 ||
      width === 428 ||
      height === 932)
  )
}
export const isX = isIphoneXorAbove()

// (Number) Will return a linear scaled result of the provided size, based on your device's screen width.
const scale = (size: number) => (width / guidelineBaseWidth) * size

// (Number) Will return a linear scaled result of the provided size, based on your device's screen height.
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size

// (Number) If normal scale will increase your size by +2X, moderateScale will only increase it by +X
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor

// (Number) Same as moderateScale, but using verticalScale instead of scale
const moderateScaleVertical = (size: number, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor

// Use for fontSize
const textScale = (fontSize: number, standardScreenHeight = 680) => {
  const standardLength = width > height ? width : height
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight

  const deviceHeight =
    isIphoneXorAbove() || Platform.OS === 'android'
      ? standardLength - Number(offset)
      : standardLength

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight
  return Math.round(heightPercent)
}

// wp(80) -> 80% of width device screen
const wp = (widthPercent: string | number) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent)
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100)
}

// hp(80) -> 80% of height device screen
const hp = (heightPercent: string | number) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent)
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100)
}

export {
  scale,
  verticalScale,
  textScale,
  moderateScale,
  moderateScaleVertical,
  width,
  height,
  wp,
  hp,
}