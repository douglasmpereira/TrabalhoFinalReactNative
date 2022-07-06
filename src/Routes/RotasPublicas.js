import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/login";


const Stack = createNativeStackNavigator();

const RotasPublicas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        //chamo o drawer aqui?
      />
      
    </Stack.Navigator>
  );
};

export default RotasPublicas;
