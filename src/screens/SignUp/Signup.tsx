import React from 'react'
import { View ,Alert} from 'react-native'

import {
  TextInput,
  Button,
  HelperText,
} from 'react-native-paper'

import { Formik } from 'formik'

import styles from './styles'
import validationSchema from '../../utils/validationSchema'

const Signup = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
       onSubmit={(values, { resetForm }) => {
  console.log(values)

  Alert.alert(
    'Success',
    'Registration Successful'
  )

  resetForm()
}}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>

            {/* Name */}

            <TextInput
              label="Name"
              mode="outlined"
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              error={!!(touched.name && errors.name)}
            />

            <HelperText
              type="error"
              visible={!!(touched.name && errors.name)}
            >
              {errors.name}
            </HelperText>

            {/* Email */}

            <TextInput
              label="Email"
              mode="outlined"
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={!!(touched.email && errors.email)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <HelperText
              type="error"
              visible={!!(touched.email && errors.email)}
            >
              {errors.email}
            </HelperText>

            {/* Password */}

            <TextInput
              label="Password"
              mode="outlined"
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={!!(touched.password && errors.password)}
              secureTextEntry
            />

            <HelperText
              type="error"
              visible={!!(touched.password && errors.password)}
            >
              {errors.password}
            </HelperText>

            {/* Confirm Password */}

            <TextInput
              label="Confirm Password"
              mode="outlined"
              style={styles.input}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={!!(
                touched.confirmPassword &&
                errors.confirmPassword
              )}
              secureTextEntry
            />

            <HelperText
              type="error"
              visible={!!(
                touched.confirmPassword &&
                errors.confirmPassword
              )}
            >
              {errors.confirmPassword}
            </HelperText>

            {/* Submit Button */}

            <Button
              mode="contained"
              style={styles.loginBtn}
              contentStyle={styles.btnContent}
              onPress={handleSubmit}
            >
              Register
            </Button>

          </View>
        )}
      </Formik>
    </View>
  )
}

export default Signup