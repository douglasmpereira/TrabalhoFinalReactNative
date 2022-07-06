import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas.js";

const Routes = () => {
  const { user} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {/*chamar o drawer aqui */}
      {!!user ? <RotasPrivadas /> : <RotasPublicas />}
    </NavigationContainer>
  );
};

export default Routes;