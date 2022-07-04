import React from "react";
import { Button, Text } from "react-native";
import { KeyBoardView, 
    Title, 
    Container, 
    Input,
    ButtonSubmit,
    TextSubmit
} from "./styles";
import Header from "../../Components/Header";

const Signin = () => {
    return (
        <KeyBoardView>
            {/* <Header/> */}
            <Container>
                <Title>Login</Title>
                <Input
                    placeholderTextColor="#fff"
                    placeholder="Login"
                />

                <Input
                    placeholderTextColor="#fff"
                    placeholder="Senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Entrar</TextSubmit>
                </ButtonSubmit>

            </Container>
        </KeyBoardView>
    )
}


export default Signin;