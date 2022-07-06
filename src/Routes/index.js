import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas.js";
import AuthProvider from "../context/context";

const Routes = () => {
   const { user } = useContext(AuthContext);
  


//   useEffect(() => {
//     signIn()

//    }, [])

  console.log(user);
  {/* chamar o drawer aqui */}

  return (
    <NavigationContainer>
      {/* {!!user ? <RotasPrivadas /> : <RotasPublicas />} */}
      <RotasPrivadas/>
    </NavigationContainer>
  );
};

export default Routes;