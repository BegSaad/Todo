import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setToken } from '../../ReduxToolkit/slices/Auth.slice'
import { setName } from '../../ReduxToolkit/slices/name.slice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native'

const useSignUpApi = () => { 
    const dispatch= useDispatch() 
    const [loading,setLoading]= useState(false) 
const signUp = async (values: any) => {
setLoading(true)
  try {
    const response :any= await axios.post(
      "https://todobackenefone.onrender.com/api/auth/registerNew",
      {
        Name: values?.name,
        Email: values?.email,
        Password: values?.password,
      }
    );

    if (response.status === 201) {
      Alert.alert("Success", "Registration Successful");
      
      dispatch(
    setToken({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    }),)
    dispatch(
    setName({
name:response?.data?.user?.name
    }))

      
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

  response.data.user.name

);
      console.log("response is", response.data);
      console.log("access token", response.data.accessToken);
      console.log("refresh token",response?.data?.refreshToken);
      console.log("name is",response?.data?.user?.name)
      return true
    }
  } catch (error: any) {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    if (status === 409) {
      Alert.alert("Email already registered");
    } else if (status === 500) {
      Alert.alert("Internal server error");
    } else if (status === 400) {
      Alert.alert(message || "All fields are required");
    } else {
      Alert.alert("Error", message || "Something went wrong");
    }

    console.log("API error:", error.response?.data || error.message);
  }
  finally{
  setLoading(false)}
  return false;
};
return{
signUp,
loading
}

 }


 export default useSignUpApi