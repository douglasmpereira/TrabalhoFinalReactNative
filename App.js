import { StatusBar } from 'expo-status-bar';
import Routes from './src/Routes';
const App = () => {
  return (
    <>
      <Routes/>
      <StatusBar style="auto" />
    </>
  );
};

export default App;