import axios from "axios";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useTasksApi = () => {
  const [tasks, setTasks] = useState([]);

 useEffect(() => {
  readTasks();
}, []);
  
  const readTasks = async () => {
    try {
      const response = await axios.get(
        "https://todobackenefone.onrender.com/api/createtask/read"
      );

      const formattedTasks = response.data.data.map((task: any) => ({
        id: task._id,
        title: task.taskName,
        description: task.taskDescription,
      }));

      setTasks(formattedTasks);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = (id: any) => {

try{
    axios.delete(`https://todobackenefone.onrender.com/api/createtask/delete/${id}`
      
    );
    Alert.alert("Success", "Task deleted successfully");
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));  
}
catch(error){
  console.log(error)
}
  };

  return {
    tasks,
    deleteTask,
  };
};

export default useTasksApi;