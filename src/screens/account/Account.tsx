import React from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { RootParamList } from '../../utils/RootParamList';
import { useAccountStyles } from './styles';
import { clearTokens } from '../../ReduxToolkit/slices/Auth.slice';
import { clearName } from '../../ReduxToolkit/slices/name.slice';

const Account = () => {
  const styles = useAccountStyles();

  type NavigationProp = NativeStackNavigationProp<RootParamList>;

  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      // Remove data from AsyncStorage
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('refreshToken');
      await AsyncStorage.removeItem('name');

      // Clear Redux state
      dispatch(clearTokens());
      dispatch(clearName());

      Alert.alert('Success', 'Logged out successfully!');

      // Navigate to Auth Stack
      navigation.reset({
        index: 0,
        routes: [{ name: 'authStack' }],
      });
    } catch (error) {
      console.log('Logout Error:', error);
      Alert.alert('Error', 'Something went wrong.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>👤</Text>

        <Text style={styles.heading}>Hey User</Text>

        <Text style={styles.subHeading}>
          Are you sure you want to logout from your account?
        </Text>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;