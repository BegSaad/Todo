import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootParamList } from "../utils/RootParamList";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/Signup";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";

const Stack = createNativeStackNavigator<RootParamList>();

const authStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        animation: 'flip',
      
    }}  
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
    </Stack.Navigator>
  );
};

export default authStack;