import { createDrawerNavigator } from "@react-navigation/drawer";
//import contato

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator>
            {/* <Drawer.Screen name="Home" component={Contato} /> */}
        </Drawer.Navigator> 
    );
};

export default MyDrawer;