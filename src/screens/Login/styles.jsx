import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const KeyBoardView = styled.KeyboardAvoidingView`

`

export const Title = styled.Text`
    color: red;
`

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: 'lightpink',
        justifyContent: 'center',
        borderBox: '2px',

       
    },
    card: {
        justifyContent: 'flex-start',
        fontSize: 25,
        borderColor: "#000",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 25
    }
})

export default styles;