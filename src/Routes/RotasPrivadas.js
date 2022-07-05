import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Produto from "../screens/Produto";
import ProdutoDetalhes from "../screens/ProdutoDetalhes";
import Contatos from "../screens/Contatos";
import MyDrawer from "./Drawer";

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Produto"
        component={Produto}
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