import React from "react";
import { Image } from "react-native";
import { Container } from "./styles";
import Logo from '../../../assets/logiinn.jpg'
const Header = () => {
    return (
        <Container>
            <Image 
                style={{width: 200, height: 100 }}
                source={Logo}
            />
        </Container>
    )
}

export default Header;