import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
            if (user) navigate("/chats")
        })

    }, [user, navigate])
    return (
        <div>
            <AuthContext.Provider value={user}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;