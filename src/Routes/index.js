import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas.js";

const Routes = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <NavigationContainer>
      {!!user ? <RotasPrivadas /> : <RotasPublicas />}
    </NavigationContainer>
  );
};

export default Routes;