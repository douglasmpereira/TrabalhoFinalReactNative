import { createDrawerNavigator } from "@react-navigation/drawer";
import Contatos from "../screens/Contatos";
import Login2 from "../screens/Login2";
import { NavigationContainer } from "@react-navigation/native";
import Produto from "../screens/Produto";
  

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            
            <Drawer.Screen name="Produto" component={Produto} />
            <Drawer.Screen name="Contatos" component={Contatos} />
            
            {/* {!!user ? <RotasPrivadas /> : <RotasPublicas />} */}
        </Drawer.Navigator>
    );
};

export default MyDrawer;