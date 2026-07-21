import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootParamList } from "../utils/RootParamList";

import CreateTask from "../screens/CreateTask/CreateTask";
import Tasks from "../screens/Tasks/Tasks";
import Account from "../screens/account/Account"

const Stack = createNativeStackNavigator<RootParamList>();

const MyStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        animation: 'flip',
    }}  
    > 
    <Stack.Screen name = "Tasks" component={Tasks} /> 
           <Stack.Screen name="CreateTask" component={CreateTask} />
           
             <Stack.Screen name = "Account" component={Account} /> 
    </Stack.Navigator>
  );
};

export default MyStack;