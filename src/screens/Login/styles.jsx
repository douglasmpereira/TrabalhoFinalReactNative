import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const KeyBoardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    color: rgb(11, 119, 138);
    width: 100%;
`

export const Title = styled.Text`
    color: #000;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const TextInput = styled.TextInput`
    border: 2px solid #12E6C8;
    margin-bottom: 30px;
    padding: 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`



export const Button = styled.TouchableOpacity`
    background-color: #A287F4;
    border-radius: 12px;
    width: 70%;
    padding: 20px;
    align-items: center;
    margin-bottom: 20px;
    textcolor: #000

`
    

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    background-color: rgb(11, 119, 138);
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
        borderRadius: 25,
    },
    createAccountText: {
        fontWeight: "bold",
        color: "#6200ee",
    }

})

export default styles;