import { StyleSheet, Text, View,Alert} from 'react-native'
import React from 'react'
import { Provider as PaperProvider} from 'react-native-paper'
import MyStack from './src/navigation/Mystack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import useNetInfo  from './src/nethook/useNetInfo'
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
 import store from './src/ReduxToolkit/store'

const App = () => {
  const netInfo = useNetInfo()

  return (
    <Provider store={store}>
   <PaperProvider>
    <Toast />
       <SafeAreaProvider>
        {netInfo ? null : (
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              No internet connection,
              Please connect to Internet
            </Text>
          </View>
        )}
     <NavigationContainer>

    <MyStack />
    </NavigationContainer>
    </SafeAreaProvider>

   </PaperProvider>
   </Provider>
  )
}

export default App

const styles = StyleSheet.create({})