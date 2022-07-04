import { createContext, useState, useContext } from "react";
import { login } from "../service/auth";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async () => {
        console.log("login");
        const { user } = await login();  //login vai conter email e senha vindo do login (e token?)
        setUser(user);
    };

    return (
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;