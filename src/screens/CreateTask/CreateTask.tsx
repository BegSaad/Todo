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
  SegmentedButtons,
} from 'react-native-paper'

import { useCreateTaskStyles } from './styles'
import axios from 'axios'
import DateTimePicker from "@react-native-community/datetimepicker";



const CreateTask = () => {

  const readData = async ()=>{
  const response = await axios.get('https://todobackenefone.onrender.com/api/createtask/read')
  console.log(response.data);
}

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


useEffect(()=>{
    readData()
   
    

  },[])
  const styles = useCreateTaskStyles()

  const { width, height } = useWindowDimensions()
  const isLandscape = width > height

  

  const [formData, setFormData] = useState({
  taskName: "",
  taskDescription: "",
  dueDate: "",
  priority: "medium",
});
const [showDateTimePicker, setShowDateTimePicker]= useState(false)
  return (
    
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      {showDateTimePicker && (
  <DateTimePicker
    value={
      formData.dueDate
        ? new Date(formData.dueDate)
        : new Date()
    }
    mode="date"
    display="default"
    onChange={(event, selectedDate) => {
      setShowDateTimePicker(false);

      if (selectedDate) {
        const formattedDate = selectedDate
          .toISOString()
          .split("T")[0];

        setFormData({
          ...formData,
          dueDate: formattedDate,
        });
      }
    }}
  />
)}
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
           <TextInput
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