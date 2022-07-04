import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const KeyBoardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #000;
    width: 100%;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const Input = styled.TextInput`
    border: 2px solid #12E6C8;
    margin-bottom: 30px;
    padding: 20px;
    color: #fff;
    font-size: 20px
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #A287F4;
    border-radius: 9px;
    width: 90%;
    padding: 20px;
    align-items: center;
    `
    
    export const TextSubmit = styled.Text`
        color: #fff;
        font-size: 20px;
        font-weight: bold;

`

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    background-color: #000
    width: 90%;
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