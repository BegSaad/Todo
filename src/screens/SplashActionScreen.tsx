import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SplashAction = ({ navigation }: any) => {
  useEffect(() => {
    checkUser();
  }, []);

 const checkUser = async () => {
  try {
    const token = await AsyncStorage.getItem("accessToken");

    if (token) {
      navigation.dispatch(StackActions.replace("Mystack"));
    } else {
      navigation.dispatch(StackActions.replace("authStack"));
    }
  } catch (error) {
    console.log("Error:", error);
    navigation.dispatch(StackActions.replace("authStack"));
  }
};

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default SplashAction;