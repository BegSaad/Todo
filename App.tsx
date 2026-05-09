import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-native-paper'
import MyStack from './src/navigation/Mystack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
 

const App = () => {
  return (
   <Provider>
       <SafeAreaProvider>
     <NavigationContainer>

    <MyStack />
    </NavigationContainer>
    </SafeAreaProvider>

   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})