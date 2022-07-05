import { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { KeyBoardView, 
    Title, 
    Container, 
    Input,
    ButtonSubmit,
    TextSubmit
} from "./styles";
//import Header from "../../Components/Header";

const Login = () => {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")


    return (
            <KeyBoardView>
            {/* <Header/> */}
            <Container>
                <Title>
                    Login
                </Title>
                <TextInput
                    placeholderTextColor="#fff"
                    placeholder="Login"
                    onChangeText={text=>setUsuario(text)}  
                />
                
                <TextInput
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    secureTextEntry
                    onChangeText={text=>setPassword(text)}
                />
                <TouchableOpacity onPress={() => signIn()}>
                    <Text>
                        Entrar    
                    </Text>
                </TouchableOpacity>
            </Container>
        </KeyBoardView>
    )
}


export default Login;