import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  moderateScale,
  verticalScale,
  textScale,
} from '../../utils';
import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes';

export const useForgotPasswordStyles = () => {
  useWindowDimensions();
  const landscape = getIsLandscape();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },

    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: moderateScale(20),
    },

    card: {
      backgroundColor: '#FFF',
      borderRadius: moderateScale(12),
      padding: moderateScale(20),
      elevation: 3,
    },

    heading: {
      fontSize: textScale(24),
      fontWeight: '700',
      color: '#000',
      textAlign: 'center',
      marginBottom: verticalScale(12),
    },

    subHeading: {
      fontSize: textScale(14),
      color: '#666',
      textAlign: 'center',
      marginBottom: verticalScale(24),
    },

    input: {
      borderWidth: 1,
      borderColor: '#D9D9D9',
      borderRadius: moderateScale(10),
      paddingHorizontal: moderateScale(15),
      height: verticalScale(50),
      marginBottom: verticalScale(20),
    },

    button: {
      backgroundColor: '#007AFF',
      borderRadius: moderateScale(10),
      height: verticalScale(48),
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      color: '#FFF',
      fontSize: textScale(16),
      fontWeight: '600',
    },
  });
};