import axios from "axios";
import { useEffect, useState } from "react";
import { Alert,ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../../utils/RootParamList'
import { useIsFocused } from '@react-navigation/native';


const useTasksApi = () => {
const isFocused = useIsFocused();
   type NavigationProp = NativeStackNavigationProp<RootParamList>
    const navigation = useNavigation<NavigationProp>()
  const [tasks, setTasks] = useState([]);
  const [loading,setLoading]= useState(false)

useEffect(() => {

  if (isFocused) {

    readTasks();
    getname()

  }

}, [isFocused]);
const [name, setName] = useState("");
 const getname = async () => {
  try {
    const storedName = await AsyncStorage.getItem("name");

    if (storedName) {
      setName(storedName);
    }
  } catch (error) {
    console.log(error);
  }
};
  const readTasks = async () => {
    try {

setLoading(true)

      const response = await axios.get(
        "https://todobackenefone.onrender.com/api/createtask/read"
      );

      const formattedTasks = response.data.data.map((task: any) => ({
        id: task._id,
        title: task.taskName,
        description: task.taskDescription,
        priority:task.priority
      }));

      setTasks(formattedTasks);
      
    } catch (error) {
      console.log(error);
    }finally {

      setLoading(false);

    }
  };

  const deleteTask = (id: any) => {

try{
    axios.delete(`https://todobackenefone.onrender.com/api/createtask/delete/${id}`);
    Alert.alert("Success", "Task deleted successfully");
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));  
}
catch(error){
  console.log(error)
}
  };

  const editTask= async(id:any)=>{

    navigation.navigate('CreateTask')
    // try{
    //   const response = await axios.put(
    //   "https://todobackenefone.onrender.com/api/createtask/update",
    //   {
    //     taskName,
    //     taskDescription ,
    //     dueDate
    //     priority,
    //   }
    // );

    // }catch(e){

    // }

  }

  return {
    tasks,
    deleteTask,
    editTask,
    loading,
    name
  };
};

export default useTasksApi;