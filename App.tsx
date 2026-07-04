import { StyleSheet, Text, View,Alert} from 'react-native'
import React from 'react'
import { Provider } from 'react-native-paper'
import MyStack from './src/navigation/Mystack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useNetInfo  from './src/nethook/useNetInfo'
import Toast from 'react-native-toast-message';
 

const App = () => {
  const netInfo = useNetInfo()

  return (
   <Provider>
    <Toast />
       <SafeAreaProvider>
        {netInfo ? null : (
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              No internet connection
            </Text>
          </View>
        )}
     <NavigationContainer>

    <MyStack />
    </NavigationContainer>
    </SafeAreaProvider>

   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})