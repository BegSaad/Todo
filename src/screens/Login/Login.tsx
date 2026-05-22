import React, { useState } from 'react'
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
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

const Login = () => {
  type NavigationProp = NativeStackNavigationProp<RootParamList>
  const navigation = useNavigation<NavigationProp>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // ✅ Triggers re-render on rotation
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
        {/* ── LANDSCAPE: side-by-side layout ─────────────────────── */}
        {/* ── PORTRAIT: stacked layout (default) ─────────────────── */}
        <View style={isLandscape ? styles.landscapeWrapper : null}>

          {/* TOP SECTION */}
          <View style={[styles.topContainer, isLandscape && styles.topContainerLandscape]}>
            <Text style={styles.logo}>TODO</Text>

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
              onPress={() => navigation.navigate('Tasks')}
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
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login