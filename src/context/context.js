import { createContext, useState, useContext, useEffect } from "react";
import { login } from "../service/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const signIn = async () => {
        alert("TESTE");
        const { user } = await login();  //login vai conter email e senha vindo do login (e token?)
        setUser(user);
    };

    useEffect(() => {
        signIn()
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;