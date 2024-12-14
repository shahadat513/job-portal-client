import { useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../fireBase/firebase.init";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    const createUser = (email, password) => {
        setLoading(true)
        return (
            createUserWithEmailAndPassword(auth, email, password)
        )
    }

    const authInfo = {
        user,
        loading,
        createUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
