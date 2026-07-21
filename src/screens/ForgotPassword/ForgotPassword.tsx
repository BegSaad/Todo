import {  Text, View ,TextInput} from 'react-native'
import React from 'react'
import styles from './styles'
import useForgotPasswordApi from './useForgotPasswordApi'
const ForgotPassword = async() => {
    await useForgotPasswordApi
  return (
   <View>

    <View>
        <Text>
            Forgot Password
        </Text>
        <View>
        <Text>
            Please Enter your registered Email
        </Text>
        <TextInput>

        </TextInput>
        </View>
    </View>
    
   </View>
  )
}

export default ForgotPassword

