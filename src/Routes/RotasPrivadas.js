import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produto from "../screens/Produto";
import ProdutoDetalhes from "../screens/ProdutoDetalhes";


const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Produto"
        component={Produto}
       //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProdutoDetalhes"
        component={ProdutoDetalhes}
       //options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Contatos"
        component={Contatos}
       //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RotasPrivadas;