const useTasksApi = () => {
  const tasks = [
    {
      id: 1,
      title: 'Buy Milk',
      description: 'Get milk from the store',
    },
    {
      id: 2,
      title: 'Study React Native',
      description: 'Learn FlatList',
    },
  ];

  return {
    tasks,
  };
};

export default useTasksApi;