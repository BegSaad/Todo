import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  moderateScale,
  verticalScale,
  textScale,
} from '../../utils';
import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes';

export const useAccountStyles = () => {
  useWindowDimensions();
  const landscape = getIsLandscape();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F8F9FC',
      paddingHorizontal: moderateScale(20),
    },

    card: {
      width: '100%',
      maxWidth: landscape ? 550 : 380,
      backgroundColor: '#FFFFFF',
      borderRadius: moderateScale(16),
      paddingVertical: verticalScale(30),
      paddingHorizontal: moderateScale(22),
      alignItems: 'center',

      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 8,
    },

    emoji: {
      fontSize: textScale(55),
      marginBottom: verticalScale(10),
    },

    heading: {
      fontSize: textScale(24),
      fontWeight: '700',
      color: '#222',
      marginBottom: verticalScale(10),
    },

    subHeading: {
      fontSize: textScale(15),
      color: '#666',
      textAlign: 'center',
      marginBottom: verticalScale(30),
      lineHeight: verticalScale(22),
    },

    logoutButton: {
      width: '100%',
      backgroundColor: '#E53935',
      paddingVertical: verticalScale(14),
      borderRadius: moderateScale(12),
      alignItems: 'center',
    },

    logoutText: {
      color: '#FFF',
      fontSize: textScale(16),
      fontWeight: '700',
    },
  });
};