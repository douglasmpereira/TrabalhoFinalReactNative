import react from "react"
import { View, Text } from "react-native"
import { StatusBar, Text, View, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles'
import { Link } from '@react-navigation/native';


const Contatos = () => {
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
    
          <View>
            <Text style={styles.titulo}>Contatos</Text>
          </View>
    
          <Image style={styles.img} source={{ uri: 'https://cdn.discordapp.com/attachments/759441341175300117/993669880182214666/PHOTO-2022-07-04-20-44-50.jpg' }} />
          <View style={styles.card}>
            <Text style={styles.baseText}>Douglas Moreira</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/douglas.moreira.1426/') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://www.instagram.com/d18mpereira/') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/douglas-moreira-817726104/') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/douglasmpereira') }} />
            </View>
          </View>
    
    
          <Image style={styles.img} source={{ uri: 'https://cdn.discordapp.com/attachments/759441341175300117/993677447918792744/PHOTO-2022-07-04-21-37-41.jpg' }} />
    
          <View style={styles.card}>
    
            <Text style={styles.baseText}>Marcelo Pessanha</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://facebook.com') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com/mar.breder?igshid=YmMyMTA2M2Y=') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/marcelo-luiz-de-pessanha-85421b188/') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/Losath') }} />
            </View>
    
          </View>
    
          <Image style={styles.img} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
    
          <View style={styles.card}>
    
            <Text style={styles.baseText}>Maria Eduarda</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://facebook.com') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://linkedin.com') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com') }} />
            </View>
    
          </View>
    
          <Image style={styles.img} source={{ uri: 'https://cdn.discordapp.com/attachments/759441341175300117/993669490934034574/IMG_7676.jpg' }} />
    
          <View style={styles.card}>
    
            <Text style={styles.baseText}>Matheus Valle</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://facebook.com') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/matheus-valle-272612128/') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/trikmatt') }} />
            </View>
    
          </View>
    
          <Image style={styles.img} source={{ uri: 'https://cdn.discordapp.com/attachments/981604231809208390/993665187217424484/46912843_1917505221671329_2213806137847840768_n.jpg' }} />
    
          <View style={styles.card}>
    
            <Text style={styles.baseText}>Rodrigo Ramos</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/rodrigo.ramos.37051') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://www.instagram.com/rodrigomramos/') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/rodrigo-ramos-048383b4/') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/rodrigomramos21') }} />
            </View>
    
          </View>
    
          <Image style={styles.img} source={{ uri: 'https://cdn.discordapp.com/attachments/759441341175300117/993670159665463427/PHOTO-2022-07-04-20-35-21.jpg' }} />
    
          <View style={styles.card}>
    
            <Text style={styles.baseText}>Rayssa Medeiros</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/rayssa.medeiros.921677') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com/ray_mdrs?igshid=YmMyMTA2M2Y=') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/rayssa-medeiros-a443ba210') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/rayssamt') }} />
            </View>
    
          </View>
    
          <Image style={styles.img} source={{ uri: 'https://cdn.discordapp.com/attachments/759441341175300117/993678031581364284/PHOTO-2022-07-04-21-41-04.jpg' }} />
    
          <View style={styles.card}>
    
            <Text style={styles.baseText}>Thatto Filgueiras</Text>
            <View style={styles.icon}>
              <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/thatobjj.filgueiras') }} />
              <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://www.instagram.com/thattosalvini/') }} />
              <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/thácito-filgueiras-thatto-51b422190/') }} />
              <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/ThattoDev') }} />
            </View>
    
          </View>
    
          <StatusBar style="auto" />
    
        </ScrollView>
    )
}
export default Contatos

