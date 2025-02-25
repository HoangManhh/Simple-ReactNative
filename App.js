import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, ScrollView, View, Button } from 'react-native';
import {useState} from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  function textChange(text){
    setTask(text);
  }
  function addTask(){
    setTaskList((currentTaskList) => [...currentTaskList, task]);
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchView}>
        <TextInput onChangeText={textChange} style={styles.searchBox} placeholder='Your task'></TextInput>
        <Button onPress={addTask} title="Add" />
      </View>
      <View style={styles.taskList}>
        {taskList.map((task, key) => <Text key={key}>{task}</Text>)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 10,
    marginBottom: 10,
  },
  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',

  },
  searchBox: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  taskList: {
    padding: 10,
  }
});
