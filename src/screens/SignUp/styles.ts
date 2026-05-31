import { StyleSheet, useWindowDimensions } from 'react-native'
import {
  moderateScale,
  verticalScale,
  textScale,
  hp,
} from '../../utils'
import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes'

export const useSignUpStyles = () => {
  useWindowDimensions()
  const landscape = getIsLandscape()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      flexGrow: 1,
      justifyContent: landscape ? 'flex-start' : 'center',
      paddingHorizontal: moderateScale(landscape ? 30 : 20),
      paddingVertical: verticalScale(landscape ? 20 : 25),
    },
   
   
  
    input: {
      marginBottom: verticalScale(10),
      backgroundColor: '#fff',
      width: '100%',
    
    },
    loginBtn: {
      marginTop: verticalScale(8),
      borderRadius: moderateScale(10),
    },
    btnContent: {
      minHeight: landscape ? 42 : 48,
    },

    // kept but unused in this screen — no errors if referenced
    logo: {
      textAlign: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(landscape ? 18 : 30),
      fontSize: textScale(26),
      fontWeight: '700',
      color: '#fff',
    },
    forgotText: { fontSize: textScale(12) },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: verticalScale(8),
    },
    divider: {
      marginBottom: verticalScale(14),
      marginTop: verticalScale(8),
    },
    socialBtn: {
      marginBottom: verticalScale(12),
      borderRadius: moderateScale(10),
      paddingVertical: verticalScale(3),
    },

heading: {
  fontSize: textScale(24),
  fontWeight: '700',
  color: '#000',
  textAlign: 'center',
  marginBottom: verticalScale(16),
  marginTop: verticalScale(30),
},
landscapeWrapper: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: moderateScale(16),
},

topContainerLandscape: {
  flex: 1,                      // left 50%
  paddingRight: moderateScale(8),
},
topContainer: {
  width: '100%',
  paddingHorizontal: moderateScale(14),
},

bottomContainer: {
  width: '100%',
  paddingHorizontal: moderateScale(14),   // same as top
  marginTop: verticalScale(14),
},
bottomContainerLandscape: {
  flex: 1,                      // right 50%
  paddingLeft: moderateScale(8),
},
  })
}