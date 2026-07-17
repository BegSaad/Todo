import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootParamList } from '../../utils/RootParamList';
import { useAccountStyles } from './styles';

const Account = () => {
  const styles = useAccountStyles();

  type NavigationProp = NativeStackNavigationProp<RootParamList>;
  const navigation = useNavigation<NavigationProp>();

  const logout = () => {
    navigation.navigate('Login');
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