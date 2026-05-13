import { StyleSheet } from 'react-native'
import {
  moderateScale,
  verticalScale,
  textScale,
  hp,
  wp,
} from '../../utils'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: '#fff',
    marginTop: hp(5),
  },

  topContainer: {
    marginTop: hp(5),
    //backgroundColor: '#52539a',
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
    marginBottom: verticalScale(8),
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
    //marginTop: verticalScale(10),
    marginBottom: hp(2),
   // backgroundColor: '#11953f',
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

export default styles