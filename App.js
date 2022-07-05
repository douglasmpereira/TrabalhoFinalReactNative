import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AuthProvider from './src/context/context';
// import Routes from './src/Routes';
import ModalList from './src/components/componentsCRUD/modal';
import ListaProdutos from './src/components/componentsCRUD/flatList';
import Produto from './src/components/componentsCRUD/produto';



export default function App() {
  return (
    // <AuthProvider> {/*preciso ter um view? o provider substitui? */}
    //   <View style={styles.container}>
    //     <Routes />
    //     <StatusBar style="auto" />
    //   </View>
    // </AuthProvider>
    
      //  <ModalList/>

      // <ListaProdutos/>
      <Produto/>
      

      
    
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
