import react from "react";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import styles from "./styles";

const Login = () => {
    const [login, setLogin] = useState(null)
    const [senha, setSenha] = useState(null)

    const logar = () => {
        console.log(login)
        console.log(senha)
    }
    
    
    return (
        <View style={styles.login}>
            <View style={styles.card}>
                <Text style={{textAlign: 'center', fontSize: 40, marginBottom: 40}}>Login</Text>
                <label htmlFor="text">Login</label>
                <input 
                    placeholder="Insira o seu login" 
                    type="text" style={{marginBottom: 30, fontSize: 20}}
                    onChange={e => setLogin(e)}
                />
                <label htmlFor="text">Senha</label>
                <input type="password" placeholder="Insira sua senha" 
                    style={{marginBottom: 30, fontSize: 20}}
                    onChange={e => setSenha(e)}
                />
                <button
                    title=""
                    loading={false}
                    loadingProps={{ size: 'small', color: 'white' }}
                    titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                    style={{
                        backgroundColor: 'lightblue',
                        height: 40,
                        width: 150,
                        alignItems: 'center',
                        borderRadius: 15,
                        marginLeft: 50,
                        marginBottom: 30,
                    }}
                    onPress={() => logar()}
                    >Log in</button>
            </View> 
        </View>
    )
}

export default Login;