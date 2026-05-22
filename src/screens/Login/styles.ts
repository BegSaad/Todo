import { StyleSheet } from 'react-native'
import { useWindowDimensions } from 'react-native'
import {
  moderateScale,
  verticalScale,
  textScale,
  hp,
} from '../../utils/responsiveSizes'
import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes'

export const useLoginStyles = () => {
  useWindowDimensions() // ✅ re-renders this hook on rotation

  const landscape = getIsLandscape()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    contentContainer: {
      flexGrow: 1,
      justifyContent: landscape ? 'flex-start' : 'center',
      paddingHorizontal: moderateScale(landscape ? 40 : 20),
      paddingVertical: verticalScale(landscape ? 10 : 20),
    },

    // ── Landscape wrapper puts top + bottom side by side ──────────
    landscapeWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: moderateScale(20),
    },

    topContainer: {
      padding: moderateScale(10),
    },

    // In landscape, each column takes 50% width
    topContainerLandscape: {
      flex: 1,
      marginTop: verticalScale(140),
    },

    logo: {
      textAlign: 'center',
      marginBottom: verticalScale(landscape ? 12 : 35),
      fontSize: textScale(30),
      fontWeight: '700',
      color: '#000',
    },

    input: {
      marginBottom: verticalScale(12),
      backgroundColor: '#fff',
    },

    loginBtn: {
      marginTop: verticalScale(10),
      borderRadius: moderateScale(10),
    },

    btnContent: {
      minHeight: landscape ? 40 : 50,
    },

    forgotText: {
      fontSize: textScale(13),
    },

    bottomContainer: {
      marginTop: verticalScale(landscape ? 0 : 20),
      marginBottom: hp(2),
    },

    // In landscape, social buttons sit in second column
    bottomContainerLandscape: {
      flex: 1,
      marginTop: verticalScale(180),
      justifyContent: 'center',
    },

    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(15),
    },

    socialBtn: {
      marginBottom: verticalScale(15),
      borderRadius: moderateScale(10),
      paddingVertical: verticalScale(4),
    },
  })
}