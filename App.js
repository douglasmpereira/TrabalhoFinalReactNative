import { StatusBar } from 'expo-status-bar';
// import { KeyBoardView } from 'react-native';
import Routes from './src/Routes';
import { KeyBoardView } from './src/screens/Login/styles';
import Login from './src/screens/Login/login';
const App = () => {
  return (
    <KeyBoardView>
      <Login />
      <StatusBar style="auto" />
    </KeyBoardView>
  );
}


export default App