

import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setToken } from '../../ReduxToolkit/slices/Auth.slice'

import { View, Alert, useWindowDimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'

const useSignUpApi = () => {   
    useEffect(()=>{

    })


  


const signUp = async (values: any) => {
  const dispatch= useDispatch()
  try {
    const response = await axios.post(
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

    })

      )
      console.log("response is", response.data);
      console.log("access token", response.data.accessToken);
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
  return false;
};
return{
signUp
}

 }


 export default useSignUpApi