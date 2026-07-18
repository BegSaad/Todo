import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  useWindowDimensions,
  ActivityIndicator,
  Pressable,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TextInput,
  Button,
  SegmentedButtons,
} from "react-native-paper";

import { Formik } from "formik";
import axios from "axios";
import { Calendar } from "react-native-calendars";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootState } from "../../ReduxToolkit/store";
import { RootParamList } from "../../utils/RootParamList";
import { registerData } from "../../utils/validationSchema";
import { useCreateTaskStyles } from "./styles";

const CreateTask = () => {
  type NavigationProp = NativeStackNavigationProp<RootParamList>;

  const navigation = useNavigation<NavigationProp>();
  const styles = useCreateTaskStyles();

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  const [showCalendar, setShowCalendar] = useState(false);
  const[loading,setLoading]=useState(false);

  const accessToken = useSelector(
    (state: RootState) => state.auth.accessToken
  );

  const refreshToken = useSelector(
    (state: RootState) => state.auth.refreshToken
  );
useEffect(() => {
    const getToken = async () => {
        const token = await AsyncStorage.getItem(
            "accessToken"
        );

        console.log("Token from AsyncStorage:", token);
    };

    getToken();
}, []);
  useEffect(() => {
    console.log("Access Token: task", accessToken);
    console.log("Refresh Token:saad", refreshToken);
  }, [accessToken, refreshToken]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={{
            taskName: "",
            taskDescription: "",
            dueDate: "",
            priority: "medium",
          }}
          validationSchema={registerData}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true)
            try {
              const response = await axios.post(
                "https://todobackenefone.onrender.com/api/createtask/post",
                values,
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                }
              );

              console.log(response.data);

              Alert.alert(
                "Success",
                "Task created successfully"
              );

              resetForm();

              navigation.goBack();
            } catch (error: any) {
              console.log(error?.response?.data);

              Alert.alert(
                "Error",
                error?.response?.data?.message ||
                  "Something went wrong"
              );
            }
            finally{
              setLoading(false)
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
            setFieldValue,
          }) => (
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
                  style={styles.input}
                  value={values.taskName}
                  onChangeText={handleChange(
                    "taskName"
                  )}
                  onBlur={handleBlur("taskName")}
                  left={
                    <TextInput.Icon
                      icon="format-title"
                    />
                  }
                />

                {touched.taskName &&
                  errors.taskName && (
                    <Text style={{ color: "red" }}>
                      {errors.taskName}
                    </Text>
                  )}

                <TextInput
                  label="Task Description"
                  mode="outlined"
                  multiline
                  numberOfLines={5}
                  style={styles.descriptionInput}
                  value={values.taskDescription}
                  onChangeText={handleChange(
                    "taskDescription"
                  )}
                  onBlur={handleBlur(
                    "taskDescription"
                  )}
                  left={
                    <TextInput.Icon
                      icon="text-box-outline"
                    />
                  }
                />

                {touched.taskDescription &&
                  errors.taskDescription && (
                    <Text style={{ color: "red" }}>
                      {errors.taskDescription}
                    </Text>
                  )}
              </View>

              {/* RIGHT SECTION */}
              <View
                style={[
                  styles.rightContainer,
                  isLandscape &&
                    styles.rightContainerLandscape,
                ]}
              >
                <Pressable
                  onPress={() =>
                    setShowCalendar(true)
                  }
                >
                  <View pointerEvents="none">
                    <TextInput
                      label="Due Date"
                      mode="outlined"
                      value={values.dueDate}
                      editable={false}
                      left={
                        <TextInput.Icon icon="calendar" />
                      }
                    />
                  </View>
                </Pressable>

                {touched.dueDate &&
                  errors.dueDate && (
                    <Text style={{ color: "red" }}>
                      {errors.dueDate}
                    </Text>
                  )}

                {showCalendar && (
                  <Calendar
                    onDayPress={(day) => {
                      setFieldValue(
                        "dueDate",
                        day.dateString
                      );
                      setShowCalendar(false);
                    }}
                  />
                )}

                <Text style={styles.label}>
                  Priority
                </Text>

                <SegmentedButtons
                  value={values.priority}
                  onValueChange={(value) =>
                    setFieldValue(
                      "priority",
                      value
                    )
                  }
                  buttons={[
                    {
                      value: "low",
                      label: "Low",
                    },
                    {
                      value: "medium",
                      label: "Medium",
                    },
                    {
                      value: "high",
                      label: "High",
                    },
                  ]}
                />

                <Button
                  mode="contained"
                  style={styles.createBtn}
                  contentStyle={
                    styles.btnContent
                  }
                  onPress={() => handleSubmit()}
                  disabled={loading}
                  loading={loading}
                >

               { loading? 'CreatingTask':  'Create Task'}
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreateTask;