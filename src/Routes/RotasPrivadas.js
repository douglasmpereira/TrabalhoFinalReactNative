import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import produtos
//import contatos

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produtos"
        component={Produtos}
       //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RotasPrivadas;