import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes';
import Produto from './src/screens/Produto';
import Login2 from './src/screens/Login2';
import AuthProvider from './src/context/context';
 

export default function App() {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
