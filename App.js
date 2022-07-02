import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Contatos } from './src/screens/Contatos/index'

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Constatos</Text>
        <Text>Douglas Moreira</Text>
        <Text>Marcelo Pessanha</Text>
        <Text>Maria Eduarda Carvalho</Text>
        <Text>Matheus Valle</Text>
        <Text>Rodrigo Ramos</Text>
        <Text>Rayssa Medeiros</Text>
        <Text>Thatto Filgueiras</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App