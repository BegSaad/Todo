import React, { useState } from 'react'
import { View , FlatList} from 'react-native'
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
import { RootParamList } from '../../utils/RootParamList'


const Tasks = () => {
type NavigationProp = NativeStackNavigationProp<RootParamList>;

const navigation = useNavigation<NavigationProp>();


  {/* a long add button
here will be cards where all the tasks will be shown and delete and edit icon on each card */}
  return (
    <View style={styles.container}> 
      <Text> My Tasks</Text>



        <Button
                mode="outlined"
                
                style={styles.socialBtn}
                onPress={() => {
                  navigation.navigate("CreateTask")
                }}
>
                +
              </Button>


    </View>
  )
}

export default Tasks