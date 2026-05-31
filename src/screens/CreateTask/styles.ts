import { StyleSheet } from 'react-native'
import { useWindowDimensions } from 'react-native'

import {
  moderateScale,
  verticalScale,
  textScale,
  hp,
} from '../../utils'

import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes'

export const useCreateTaskStyles = () => {
  useWindowDimensions()

  const landscape = getIsLandscape()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    contentContainer: {
      flexGrow: 1,
      paddingHorizontal: moderateScale(
        landscape ? 40 : 20
      ),
      paddingVertical: verticalScale(
        landscape ? 10 : 20
      ),
      justifyContent: landscape
        ? 'flex-start'
        : 'center',
    },

    landscapeWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: moderateScale(25),
      marginTop: verticalScale(20),
    },

    leftContainer: {
      flex: 1,
    },

    rightContainer: {
      flex: 1,
    },

    leftContainerLandscape: {
      flex: 1,
    },

    rightContainerLandscape: {
      flex: 1,
      justifyContent: 'center',
      marginTop: verticalScale(80),
    },

    heading: {
      textAlign: 'center',
      fontSize: textScale(30),
      fontWeight: '700',
      color: '#000',
      marginTop: hp(3),
      marginBottom: verticalScale(30),
    },

    input: {
      marginBottom: verticalScale(15),
      backgroundColor: '#fff',
    },

    descriptionInput: {
      backgroundColor: '#fff',
      minHeight: verticalScale(140),
    },

    label: {
      fontSize: textScale(16),
      fontWeight: '600',
      marginBottom: verticalScale(10),
      marginTop: verticalScale(5),
    },

    createBtn: {
      marginTop: verticalScale(30),
      borderRadius: moderateScale(10),
    },

    btnContent: {
      minHeight: verticalScale(50),
    },
  })
}