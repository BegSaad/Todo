import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const useForgotPasswordApi = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const forgotPassword = async () => {
    try {
      if (!email.trim()) {
        Alert.alert('Error', 'Please enter your email.');
        return;
      }

      setLoading(true);

      const response = await axios.post(
    "https://todobackenefone.onrender.com/api/auth/forgotpassword",
      
        {
          email,
        },
      );

      Alert.alert(
        'Success',
        response.data.message || 'Password reset link sent successfully.',
      );
    } catch (error: any) {
      console.log('Forgot Password Error:', error?.response?.data);

      Alert.alert(
        'Error',
        error?.response?.data?.message ||
          'Something went wrong. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    loading,
    forgotPassword,

  };
};

export default useForgotPasswordApi;