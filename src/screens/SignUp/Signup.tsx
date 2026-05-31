import React from 'react'
import { View, Alert, useWindowDimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { TextInput, Button, HelperText, Text } from 'react-native-paper'
import { Formik } from 'formik'
import { useSignUpStyles } from './styles'
import validationSchema from '../../utils/validationSchema'

const Signup = () => {
  const { width, height } = useWindowDimensions()
  const isLandscape = width > height
  const styles = useSignUpStyles()

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
        <Formik
          initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values)
            Alert.alert('Success', 'Registration Successful')
            resetForm()
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

            <View>
              {/* Heading — always full width on top */}
              <Text style={styles.heading}>Register New User</Text>

              <View style={isLandscape ? styles.landscapeWrapper : undefined}>

                {/* LEFT / TOP — Name + Email */}
                <View style={isLandscape ? styles.topContainerLandscape : styles.topContainer}>

                  <TextInput
                    label="Name"
                    mode="outlined"
                    style={styles.input}
                    onChangeText={handleChange('name')}
                    theme={{ roundness: 10 }} 
                    onBlur={handleBlur('name')}
                    value={values.name}
                    error={!!(touched.name && errors.name)}
                  />
                  <HelperText type="error" visible={!!(touched.name && errors.name)}>
                    {errors.name}
                  </HelperText>

                  <TextInput
                    label="Email"
                    mode="outlined"
                    style={styles.input}
                    theme={{ roundness: 10 }} 
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={!!(touched.email && errors.email)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                  <HelperText type="error" visible={!!(touched.email && errors.email)}>
                    {errors.email}
                  </HelperText>

                </View>

                {/* RIGHT / BOTTOM — Password + Confirm + Register */}
                <View style={isLandscape ? styles.bottomContainerLandscape : styles.bottomContainer}>

                  <TextInput
                    label="Password"
                    mode="outlined"
                    theme={{ roundness: 10 }} 
                    style={styles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={!!(touched.password && errors.password)}
                    secureTextEntry
                  />
                  <HelperText type="error" visible={!!(touched.password && errors.password)}>
                    {errors.password}
                  </HelperText>

                  <TextInput
                    label="Confirm Password"
                    mode="outlined"
                    theme={{ roundness: 10 }} 
                    style={styles.input}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    error={!!(touched.confirmPassword && errors.confirmPassword)}
                    secureTextEntry
                  />
                  <HelperText type="error" visible={!!(touched.confirmPassword && errors.confirmPassword)}>
                    {errors.confirmPassword}
                  </HelperText>

                  <Button
                    mode="contained"
                    style={styles.loginBtn}
                    contentStyle={styles.btnContent}
                    onPress={handleSubmit}
                  >
                    Register
                  </Button>

                </View>

              </View>
            </View>

          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup