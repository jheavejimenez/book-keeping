import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data) => {
        setUser(data);
        
    };

    // call this function to sign out logged in user
    const logout = () => {
        signOut(auth) // Sign-out successful.
        setUser({});
        navigate("/", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};