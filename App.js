import { StatusBar, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles'


const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View>
        <Text style={styles.titulo}>Contatos</Text>
      </View>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
      <View style={styles.card}>
        <Text style={styles.baseText}>Douglas Moreira</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>
      </View>


      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Marcelo Pessanha</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>

      </View>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Maria Eduarda</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>

      </View>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Matheus Valle</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>

      </View>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Rodrigo Ramos</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>

      </View>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Rayssa Medeiros</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>

      </View>

      <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Thatto Filgueiras</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" />
          <Icon name="instagram" size={30} color="white" />
          <Icon name="linkedin" size={30} color="white" />
          <Icon name="github" size={30} color="white" />
        </View>

      </View>

      <StatusBar style="auto" />

    </ScrollView>

  );
};



export default App;