import React, { useState } from 'react';
import {
  Alert,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  ActivityIndicator
} from 'react-native';

import { TextInput, Button, HelperText, Text } from 'react-native-paper';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useSignUpStyles } from './styles';
import { validationSchema } from '../../utils/validationSchema';
import useSignUpApi from './useSignUpApi';
import { RootParamList } from '../../utils/RootParamList';

const Signup = () => {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);

  type NavigationProp = NativeStackNavigationProp<RootParamList>;

  const navigation = useNavigation<NavigationProp>();
  const { signUp,loading } = useSignUpApi();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const styles = useSignUpStyles();

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
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const success = await signUp(values);
              if (success) {
                resetForm();
                Alert.alert(
                  'Success',
                  'Registration Successful',
                  [
                    {
                      text: 'OK',
                      onPress: () =>
                        navigation.navigate('Tasks'),
                    },
                  ]
                );
              }
            } catch (error) {
              Alert.alert(
                'Error',
                'Registration failed'
              );
            }
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
              <Text style={styles.heading}>
                Register New User
              </Text>

              <View
                style={
                  isLandscape
                    ? styles.landscapeWrapper
                    : undefined
                }
              >
                {/* LEFT / TOP */}
                <View
                  style={
                    isLandscape
                      ? styles.topContainerLandscape
                      : styles.topContainer
                  }
                >
                  <TextInput
                    label="Name"
                    mode="outlined"
                    style={styles.input}
                    theme={{ roundness: 10 }}
                    onChangeText={handleChange(
                      'name'
                    )}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    error={
                      !!(
                        touched.name &&
                        errors.name
                      )
                    }
                  />

                  <HelperText
                    type="error"
                    visible={
                      !!(
                        touched.name &&
                        errors.name
                      )
                    }
                  >
                    {errors.name}
                  </HelperText>

                  <TextInput
                    label="Email"
                    mode="outlined"
                    style={styles.input}
                    theme={{ roundness: 10 }}
                    onChangeText={handleChange(
                      'email'
                    )}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={
                      !!(
                        touched.email &&
                        errors.email
                      )
                    }
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />

                  <HelperText
                    type="error"
                    visible={
                      !!(
                        touched.email &&
                        errors.email
                      )
                    }
                  >
                    {errors.email}
                  </HelperText>
                </View>

                {/* RIGHT / BOTTOM */}
                <View
                  style={
                    isLandscape
                      ? styles.bottomContainerLandscape
                      : styles.bottomContainer
                  }
                >
                  <TextInput
                    label="Password"
                    mode="outlined"
                    theme={{ roundness: 10 }}
                    style={styles.input}
                    onChangeText={handleChange(
                      'password'
                    )}
                    onBlur={handleBlur(
                      'password'
                    )}
                    value={values.password}
                    error={
                      !!(
                        touched.password &&
                        errors.password
                      )
                    }
                    secureTextEntry={
                      securePassword
                    }
                    right={
                      <TextInput.Icon
                        icon={
                          securePassword
                            ? 'eye-off'
                            : 'eye'
                        }
                        onPress={() =>
                          setSecurePassword(
                            !securePassword
                          )
                        }
                      />
                    }
                  />

                  <HelperText
                    type="error"
                    visible={
                      !!(
                        touched.password &&
                        errors.password
                      )
                    }
                  >
                    {errors.password}
                  </HelperText>

                  <TextInput
                    label="Confirm Password"
                    mode="outlined"
                    theme={{ roundness: 10 }}
                    style={styles.input}
                    onChangeText={handleChange(
                      'confirmPassword'
                    )}
                    onBlur={handleBlur(
                      'confirmPassword'
                    )}
                    value={
                      values.confirmPassword
                    }
                    error={
                      !!(
                        touched.confirmPassword &&
                        errors.confirmPassword
                      )
                    }
                    secureTextEntry={
                      secureConfirmPassword
                    }
                    right={
                      <TextInput.Icon
                        icon={
                          secureConfirmPassword
                            ? 'eye-off'
                            : 'eye'
                        }
                        onPress={() =>
                          setSecureConfirmPassword(
                            !secureConfirmPassword
                          )
                        }
                      />
                    }
                  />

                  <HelperText
                    type="error"
                    visible={
                      !!(
                        touched.confirmPassword &&
                        errors.confirmPassword
                      )
                    }
                  >
                    {errors.confirmPassword}
                  </HelperText>

                  <Button
                    mode="contained"
                    style={styles.loginBtn}
                    contentStyle={
                      styles.btnContent
                    }
                    onPress={() =>
                      handleSubmit()}
                   loading={loading}

  disabled={loading}

>

  {loading ? "Registering..." : "Register"}

</Button>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;