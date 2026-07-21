import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  Alert
} from 'react-native'
import {
  Text,
  TextInput,
  Button,
} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useLoginStyles } from './styles'
import { RootParamList } from '../../utils/RootParamList'
import axios from 'axios'
import { useIsFocused } from '@react-navigation/native';

import { useDispatch } from 'react-redux'
import { setToken } from '../../ReduxToolkit/slices/Auth.slice'
import { setName } from '../../ReduxToolkit/slices/name.slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
   const dispatch= useDispatch() 
  const isFocused = useIsFocused();
  const [securePassword, setSecurePassword] = useState(true);
  type NavigationProp = NativeStackNavigationProp<RootParamList>
  const navigation = useNavigation<NavigationProp>()
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [loading,setLoading]=useState(false)
const loginPressed=async()=>{
  setLoading(true)
  try{
    const response= await axios.post( "https://todobackenefone.onrender.com/api/auth/login",
      {
Email,
Password
      }
    )
if(response.status===200){
  Alert.alert("Success", "Login Successful");
       dispatch(
    setToken({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    }),)
    dispatch(setName({ name: response.data.usernameis}))
      await AsyncStorage.setItem(
  "accessToken",
  response.data.accessToken
);

await AsyncStorage.setItem(
  "refreshToken",
  response.data.refreshToken
);

await AsyncStorage.setItem(
  "name",
  response.data.username

);
   
    console.log("login response",JSON.stringify(response,null,2))

                 navigation.navigate('Tasks')
} 

  }
  catch(error:any){
     const status = error.response?.status;
    const message = error.response?.data?.message;
console.log(error)
if(status===404){
  Alert.alert("Sad", "This email is not registered");
}
  }
  finally{
    setLoading(false)
  }
              
}


  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  // ✅ Dynamic styles — recalculates on every rotation
  const styles = useLoginStyles()

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={isLandscape ? styles.landscapeWrapper : null}>

          {/* TOP SECTION */}
          <View style={[styles.topContainer, isLandscape && styles.topContainerLandscape]}>
            <Text style={styles.logo}>DOTOIST</Text>

            <TextInput
              label="Email"
              mode="outlined"
              value={Email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              left={<TextInput.Icon icon="email-outline" />}
            />

            <TextInput
              label="Password"
              mode="outlined"
              value={Password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry={securePassword}
              left={<TextInput.Icon icon="lock-outline" />}
                right={
                    <TextInput.Icon
                      icon={securePassword ? 'eye-off' : 'eye'}
                      onPress={() => setSecurePassword(!securePassword)}
                    />
                  }
            />

            <Button
              mode="contained"
              style={styles.loginBtn}
              contentStyle={styles.btnContent}
              onPress={loginPressed}
                loading={loading}
                disabled={loading}
            >
               {loading?'Logging In..':'Login'}
            </Button>

            <Button
              mode="text"
              onPress={() => {}}
              labelStyle={styles.forgotText}
            >
              Forgot Password?
            </Button>
          </View>

          {/* BOTTOM SECTION */}
          <View style={[styles.bottomContainer, isLandscape && styles.bottomContainerLandscape]}>
            <View style={styles.row}>
              <Text variant="bodyMedium">Don't have an account?</Text>
              <Button
                mode="text"
                onPress={() => navigation.navigate('Signup')}
              
              >
           Sign Up
              </Button>
            </View>

           

         

         
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login