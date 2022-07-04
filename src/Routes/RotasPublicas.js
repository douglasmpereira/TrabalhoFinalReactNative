import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/Login/login";

const Stack = createNativeStackNavigator();

const RotasPublicas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Signin}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Contatos"
        component={Cotatos}
        options={{ title: "Título da Página" }}
      /> vai ficar no drawer?  */}
    </Stack.Navigator>
  );
};

export default RotasPublicas;