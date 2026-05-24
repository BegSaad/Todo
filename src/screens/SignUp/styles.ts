import { StyleSheet } from 'react-native'
import {
  moderateScale,
  verticalScale,
  textScale,
  hp,
  wp,
} from '../../utils'
import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes'
export const useSignUpStyles =()=>{

  const landscape = getIsLandscape()

return StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: '#fff',
  },

  topContainer: {
    marginTop: hp(5),
    
    padding: moderateScale(10),
    borderRadius: moderateScale(12),
  },

  logo: {
    textAlign: 'center',
    marginTop:verticalScale(20),
    marginBottom: verticalScale(40),
    fontSize: textScale(28),
    fontWeight: '700',
    color: '#fff',
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
    height: verticalScale(50),
  },

  forgotText: {
    fontSize: textScale(13),
  },

  bottomContainer: {
  
    marginBottom: hp(2),
  
    padding: moderateScale(15),
    borderRadius: moderateScale(12),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },

  divider: {
    marginBottom: verticalScale(20),
  },

  socialBtn: {
    marginBottom: verticalScale(15),
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(4),
  },

})

}