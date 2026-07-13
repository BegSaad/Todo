import React, { useState,useEffect } from 'react'
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  useWindowDimensions,
} from 'react-native'

import {
  Text,
  TextInput,
  Button,
  SegmentedButtons
} from 'react-native-paper'

import { useCreateTaskStyles } from './styles'
import axios from 'axios'
import { Pressable} from "react-native";
import { Calendar } from 'react-native-calendars';
import { useSelector } from 'react-redux';
import { RootState } from '../../ReduxToolkit/store';




const CreateTask = () => {
    const accessToken = useSelector(
  (state: RootState) => state.auth.accessToken
);
const refreshToken = useSelector(
  (state:RootState)=>state.auth.refreshToken
)
useEffect(()=>{

console.log("saad")
console.log(accessToken);
console.log(refreshToken)
})

const postData = async () => {
  try {
    const response = await axios.post(
      "https://todobackenefone.onrender.com/api/createtask/post",
      {
        taskName: formData.taskName,
        taskDescription: formData.taskDescription   ,
        dueDate: formData.dueDate,
        priority: formData.priority,
      }
    );

    console.log(response.data);
    Alert.alert("Success", "Task created successfully");
     setFormData({
      taskName: "",
      taskDescription: "",
      dueDate: "",
      priority: "medium",
    });
  } catch (error:any) {
    console.log(error.response?.data);
  }
};


  const styles = useCreateTaskStyles()

  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  

  const [formData, setFormData] = useState({
  taskName: "",
  taskDescription: "",
  dueDate: "",
  priority: "medium",
});
const [showCalendar, setShowCalendar] = useState(false);
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
              value={formData.taskName    }
              onChangeText={(text) => setFormData({...formData, taskName: text})}
              style={styles.input}
              left={
                <TextInput.Icon icon="format-title" />
              }
            />

            <TextInput
              label="Task Description"
              mode="outlined"
              value={formData.taskDescription}
              onChangeText={(text) => setFormData({...formData, taskDescription: text})}
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
           {/* <TextInput
              label="Due Date"
              mode="outlined"
              value={formData.dueDate}
              onChangeText={(text) => setFormData({...formData, dueDate: text})}
              placeholder="DD/MM/YYYY"
              style={styles.input}
              left={
                <TextInput.Icon icon="calendar" />
              }
            /> 
          <Calendar
  initialDate="2022-12-01"
  minDate="2022-12-01"
  maxDate="2023-01-30"
  disableAllTouchEventsForDisabledDays={true}
/> */}
<Pressable onPress={() => setShowCalendar(true)}>

  <View pointerEvents="none">

    <TextInput

      label="Due Date"

      mode="outlined"

      value={formData.dueDate}

      editable={false}

      left={<TextInput.Icon icon="calendar" />}

    />

  </View>

</Pressable>
{showCalendar && (
  <Calendar
    onDayPress={(day) => {
      setFormData({
        ...formData,
        dueDate: day.dateString,
      });

      setShowCalendar(false);
    }}
  />
)}

            <Text style={styles.label}>
              Priority
            </Text>

            <SegmentedButtons
              value={formData.priority}
              onValueChange={(value) => setFormData({...formData, priority: value})}
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
              onPress={() => {
                postData()
                console.log("button is pressed")
            
              }}
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