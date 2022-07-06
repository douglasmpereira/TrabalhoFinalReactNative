import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/context/context';
import Routes from './src/Routes';
import Login from './src/screens/Login/login';
const App = () => {
  return (
    <>
      <AuthProvider>
        {/* <Routes/> */}
        <Login/>
        <StatusBar style="auto" />
      </AuthProvider>
    </>
  );
};

export default App;