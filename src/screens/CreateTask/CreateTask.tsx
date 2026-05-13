import React, { useState } from 'react'
import { View } from 'react-native'
import {
  Text,
  TextInput,
  Button,
  Divider,
  Icon,
} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import AntDesign from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'

  
   
  


const CreateTask = () => {
  return (
    <View style={styles.container}>


<Text>Create Task</Text>


<TextInput
          label="Task Title"
          mode="outlined"
          style={styles.input}
        />

<TextInput
          label="Task Description"
          mode="outlined"
          style={styles.input}
        />

        <Button
          mode="contained"
          style={styles.loginBtn}
          contentStyle={styles.btnContent}
        >
          Create Task
        </Button>

     
    </View>
  )
}

export default CreateTask