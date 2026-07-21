import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForgotPasswordStyles } from './styles';
import useForgotPasswordApi from './useForgotPasswordApi';

const ForgotPassword = () => {
  const styles = useForgotPasswordStyles();

  const { email, setEmail, forgotPassword} = useForgotPasswordApi();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <Text style={styles.heading}>Forgot Password</Text>

          <Text style={styles.subHeading}>
            Please enter your registered email address.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={forgotPassword}>
            <Text style={styles.buttonText}>Send Reset Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;