import React ,{ useEffect}from 'react'
import {
  View,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native'
import {
  Text,
  Card,
  IconButton,
} from 'react-native-paper'
import { FAB } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { RootParamList } from '../../utils/RootParamList'
import useTasksApi from './useTasksApi'
import { useTasksStyles } from './styles'
import axios from 'axios'

const Tasks = () => {
  type NavigationProp = NativeStackNavigationProp<RootParamList>

  const navigation = useNavigation<NavigationProp>()

  const { tasks , deleteTask} = useTasksApi()

  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  const styles = useTasksStyles()
 

  

  const renderTask = ({ item }: { item: any }) => (
    <TouchableOpacity
      
    >
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text variant="titleMedium">
              {item.title}
            </Text>

            <Text
              variant="bodyMedium"
              style={styles.description}
            >
              {item.description}
            </Text>
          </View>

          <IconButton
            icon="delete-outline"
            onPress={() => deleteTask(item.id)}
          />
        </Card.Content>
      </Card>
    </TouchableOpacity>
  )

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      <ScrollView
        contentContainerStyle={
          styles.contentContainer
        }
        showsVerticalScrollIndicator={false}
      >
        <View
          style={
            isLandscape
              ? styles.landscapeWrapper
              : undefined
          }
        >
          <View
            style={[
              styles.topContainer,
              isLandscape &&
                styles.topContainerLandscape,
            ]}
          >
            <Text style={styles.title}>
              My Tasks
            </Text>

            {tasks.length === 0 ? (
              <View style={styles.emptyContainer}>
                <AntDesign
                  name="questioncircleo"
                  size={80}
                  color="#999"
                />

                <Text style={styles.emptyText}>
                  No Tasks Yet
                </Text>
              </View>
            ) : (
              <FlatList
                scrollEnabled={false}
                data={tasks}
                keyExtractor={item =>
                  item.id.toString()
                }
                renderItem={renderTask}
              />
            )}
          </View>
        </View>
      </ScrollView>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() =>
          navigation.navigate('CreateTask')
        }
      />
    </KeyboardAvoidingView>
  )
}

export default Tasks