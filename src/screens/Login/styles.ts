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
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(30),
    backgroundColor: '#fff',
  },

  topContainer: {
    marginTop: hp(5),
  },

  logo: {
    textAlign: 'center',
    marginBottom: verticalScale(40),
    fontSize: textScale(28),
    fontWeight: '700',
  },

  input: {
    marginBottom: verticalScale(18),
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
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(20),
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