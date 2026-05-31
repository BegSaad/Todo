import { StyleSheet } from 'react-native'
import { useWindowDimensions } from 'react-native'

import {
  moderateScale,
  verticalScale,
  textScale,
} from '../../utils/responsiveSizes'

import { isLandscape as getIsLandscape } from '../../utils/responsiveSizes'

export const useTasksStyles = () => {
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
    },

    landscapeWrapper: {
      flexDirection: 'row',
      flex: 1,
    },

    topContainer: {
      flex: 1,
    },

    topContainerLandscape: {
      flex: 1,
    },

    title: {
      textAlign: 'center',
      fontSize: textScale(30),
      fontWeight: '700',
      marginBottom: verticalScale(25),
      color: '#000',
    },

    card: {
      marginBottom: verticalScale(12),
      borderRadius: moderateScale(12),
      elevation: 3,
    },

    cardContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    textContainer: {
      flex: 1,
      paddingRight: moderateScale(10),
    },

    description: {
      marginTop: verticalScale(4),
      color: '#666',
    },

    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(100),
    },

    emptyText: {
      marginTop: verticalScale(15),
      fontSize: textScale(18),
      color: '#666',
      fontWeight: '500',
    },

    fab: {
      position: 'absolute',
      right: 20,
      bottom: 20,
    },
  })
}