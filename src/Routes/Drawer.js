import { createDrawerNavigator } from "@react-navigation/drawer";
import Contatos from "../screens/Contatos";
import Login2 from "../screens/Login2";
import { NavigationContainer } from "@react-navigation/native";
import Produto from "../screens/Produto";

// function Login2({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Login')}
//           title="Go to login"
//         />
//       </View>
//     );
//   }
  
//   function Contatos({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     );
//   }
  

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login2} />
            <Drawer.Screen name="Contatos" component={Contatos} />
            <Drawer.Screen name="Produto" component={Produto} />
            
            {/* {!!user ? <RotasPrivadas /> : <RotasPublicas />} */}
        </Drawer.Navigator>
    );
};

export default MyDrawer;