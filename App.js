import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, ScrollView, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Type your name </Text>
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name"
      />
      <Button title='Submit'/>
      <Text>Type your name </Text>
      <Text>Type your name </Text>
      <Text>Type your name </Text>
      <Text>Type your name </Text>
      <Text>Type your name </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
