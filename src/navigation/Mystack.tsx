import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootParamList } from "../utils/RootParamList";
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/Signup";
import CreateTask from "../screens/CreateTask/CreateTask";
import Tasks from "../screens/Tasks/Tasks";

const Stack = createNativeStackNavigator<RootParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        animation: 'flip',
      
    }}  
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
           <Stack.Screen name="CreateTask" component={CreateTask} />
           <Stack.Screen name = "Tasks" component={Tasks} /> 
    </Stack.Navigator>
  );
};

export default MyStack;