import { StatusBar } from 'expo-status-bar';
import Signin from './src/screens/Login/login';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Signin' component={Signin}/>
          
            
          <StatusBar style="auto" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App