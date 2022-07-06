import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Contatos from "../screens/Contatos";
import Login2 from "../screens/Login2";
import MyDrawer from "./Drawer";


const Stack = createNativeStackNavigator();

const RotasPublicas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contatos"
        component={Contatos}
        options={{ title: "Título da Página" }}
      /> 
    </Stack.Navigator>
  );
};

export default RotasPublicas;