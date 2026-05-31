import React, { useState } from 'react'
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native'

import {
  Text,
  TextInput,
  Button,
  SegmentedButtons,
} from 'react-native-paper'

import { useCreateTaskStyles } from './styles'

const CreateTask = () => {
  const styles = useCreateTaskStyles()

  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [priority, setPriority] = useState('medium')

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
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View
          style={
            isLandscape
              ? styles.landscapeWrapper
              : undefined
          }
        >
          {/* LEFT SECTION */}
          <View
            style={[
              styles.leftContainer,
              isLandscape &&
                styles.leftContainerLandscape,
            ]}
          >
            <Text style={styles.heading}>
              Create Task
            </Text>

            <TextInput
              label="Task Title"
              mode="outlined"
              value={title}
              onChangeText={setTitle}
              style={styles.input}
              left={
                <TextInput.Icon icon="format-title" />
              }
            />

            <TextInput
              label="Task Description"
              mode="outlined"
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={6}
              style={styles.descriptionInput}
              left={
                <TextInput.Icon icon="text-box-outline" />
              }
              right={
                <TextInput.Icon
                  icon="microphone-outline"
                  onPress={() =>
                    console.log(
                      'Speech recognition'
                    )
                  }
                />
              }
            />
          </View>

          {/* RIGHT SECTION */}
          <View
            style={[
              styles.rightContainer,
              isLandscape &&
                styles.rightContainerLandscape,
            ]}
          >
            <TextInput
              label="Due Date"
              mode="outlined"
              value={dueDate}
              onChangeText={setDueDate}
              placeholder="DD/MM/YYYY"
              style={styles.input}
              left={
                <TextInput.Icon icon="calendar" />
              }
            />

            <Text style={styles.label}>
              Priority
            </Text>

            <SegmentedButtons
              value={priority}
              onValueChange={setPriority}
              buttons={[
                {
                  value: 'low',
                  label: 'Low',
                },
                {
                  value: 'medium',
                  label: 'Medium',
                },
                {
                  value: 'high',
                  label: 'High',
                },
              ]}
            />

            <Button
              mode="contained"
              style={styles.createBtn}
              contentStyle={styles.btnContent}
            >
              Create Task
            </Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateTask