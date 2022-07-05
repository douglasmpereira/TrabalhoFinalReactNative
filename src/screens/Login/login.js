import React, { useState } from "react";
import styles, { KeyBoardView, 
    Title, 
    Container, 
    TextInput,
    Button
} from "./styles";

import { Text, TouchableOpacity } from "react-native";



function Login({navigation})  {
    

    const user="Aluno"
    const password= "123"
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const logar = () => {

        if ( usuario === user && senha === password) {
            alert("Loguei CaRaY")
            navigation.navigate("Produto");
            
        }else {
            alert("Login ou senha inválido, tente novamente!")
            
        }
        
    };

    

    return (
        <KeyBoardView>
            {/* <Header/> */}
            <Container>
                <Title>Login</Title>
                <TextInput
                    placeholderTextColor="#fff"
                    placeholder="Login"
                    onChangeText={text=>setUsuario(text)}
                />

                <TextInput
                    
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    onChangeText={text=>setSenha(text)}
                    secureTextEntry
                />
                <Button  onPress={() => logar()} >
                    <Text>Log in</Text>
                </Button>
                <TouchableOpacity onPress={() => cadastro()}>
                    <Text>
                        Não tem uma conta?{""}
                        <Text style={styles.createAccountText}>
                            FODA-SEEE
                        </Text>
                    </Text>
                </TouchableOpacity>
                        

            </Container>
        </KeyBoardView>
    )
}


export default Login;