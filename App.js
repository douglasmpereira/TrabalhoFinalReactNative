import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';


const App = () => {
  return (

    <View style={styles.container}>
      <>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Douglas Moreira</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Marcelo Pessanha</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Maria Eduarda</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Matheus Valle</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Rodrigo Ramos</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Rayssa Medeiros</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
        <View style={styles.card}>
          <>
            <Text style={styles.baseText}>Thatto Filgueiras</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" />
              <Icon name="instagram" size={30} color="white" />
              <Icon name="linkedin" size={30} color="white" />
              <Icon name="github" size={30} color="white" />
            </View>
          </>
        </View>
      </>
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
  card: {
    backgroundColor: 'purple',
    width: "50%",
    height: "10%",
    justifyContent: 'space-evenly',
    display: "flex",
    flexDirection: 'clolumn',
    marginBottom: 10

  },
  baseText: {
    color: 'white',
    fontSize: "25%",
    alignSelf: 'center'

  },
  icon: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: '2%'

  }
});

export default App