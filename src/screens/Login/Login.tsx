import React, { useState } from 'react'
import { View } from 'react-native'
import {
  Text,
  TextInput,
  Button,
  Divider,
} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import styles from './styles'
import { RootParamList } from '../../utils/RootParamList'

const Login = () => {


type NavigationProp = NativeStackNavigationProp<RootParamList>;

const navigation = useNavigation<NavigationProp>();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      
      {/* TOP SECTION */}
      <View style={styles.topContainer}>

        <Text variant="headlineMedium" style={styles.logo}>
          TODO
        </Text>

        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon="email-outline" />}
        />

        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          left={<TextInput.Icon icon="lock-outline" />}
        />

        <Button
          mode="contained"
          style={styles.loginBtn}
          contentStyle={styles.btnContent}
          onPress={() => {
navigation.navigate("CreateTask")
          }}
        >
          Login
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
      <View style={styles.bottomContainer}>

        <View style={styles.row}>
          <Text variant="bodyMedium">
            Don't have an account?
          </Text>

          <Button mode="text" onPress={() => {}}>
            Sign Up
          </Button>
        </View>

        <Divider style={styles.divider} />

        <Button
          mode="outlined"
          icon="google"
          style={styles.socialBtn}
          onPress={() => {}}
        >
          Continue with Google
        </Button>

        <Button
          mode="outlined"
          icon="email-outline"
          style={styles.socialBtn}
          onPress={() => {}}
        >
          Continue with Email
        </Button>

        <Button
          mode="outlined"
          icon="github"
          style={styles.socialBtn}
          onPress={() => {}}
        >
          Continue with GitHub
        </Button>

      </View>
    </View>
  )
}

export default Login