import styled from "styled-components";
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
    background: #844E93;
    borderColor: rgba(1, 10, 1, 0.40);
    borderBottomWidth:5;
    borderRightWidth:5;
    margin-bottom: 30px;
    padding: 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 20px;
    width: 90%;
    outline: none;
`



export const Button = styled.TouchableOpacity`
    background-color:#844E93;
    border-radius: 20px;
    borderColor: 'rgba(1, 10, 1, 0.40)',
    borderBottomWidth:5;
    borderRightWidth:5;
    width: 40%;
    padding: 5px;
    align-items: center;
    color: red;
   
    `
    

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    width: 90%;
    
`

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: 'lightpink',
        justifyContent: 'center',
        borderBox: '2px',

       
    },
    btn:{
        color: 'white',
        fontSize: 30,
    },
   
    card: {
        justifyContent: 'flex-start',
        fontSize: 25,
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 25,
    },
    createAccountText: {
        fontWeight: "bold",
        color: 'red',
    },
    
    
})

export default styles;