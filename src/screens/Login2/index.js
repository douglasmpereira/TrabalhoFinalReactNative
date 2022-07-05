import { Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { style } from "./style";
import { AuthContext } from "../../context/context";
import { useContext } from "react";

const Login2 = () => {
    const { usuario, signIn } = useContext(AuthContext);

   

    return (
        <View style={style.view}>
            <Text>LOGIN</Text>
            <TextInput style={style.input} />
            <TextInput style={style.input} />

            <TouchableOpacity style={style.button} onPress={() => signIn()}>
                <Text>entrar</Text>
            </TouchableOpacity>

        </View>
    )
}


export default Login2;