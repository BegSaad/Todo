import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SplashAction from '../screens/SplashActionScreen';
import MyStack from './Mystack';
import authStack from './authStack';
import { RootParamList } from '../utils/RootParamList';

const Stack = createNativeStackNavigator<RootParamList>()


const MainRoot=()=>{
    return(
        <SafeAreaView style={{ flex: 1 }}>
                    <Stack.Navigator 
                     screenOptions={{
        headerShown: false,
      }}
                    initialRouteName="SplashAction">
  <Stack.Screen name="SplashAction" component={SplashAction} />
  <Stack.Screen name="Mystack" component={MyStack} />
  <Stack.Screen name="authStack" component={authStack} />
</Stack.Navigator>
        </SafeAreaView>

    )
}

 export default MainRoot;