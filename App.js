import Signin from './src/screens/Login/login.js';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native"

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Signin' component={Signin}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


export default App