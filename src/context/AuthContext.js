import React, {createContext, useState } from 'react'

import {signIn as signInAPI, register as registerAPI } from '../apis'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"))
    const [loading, setLoading] = useState(false)

    const signIn = async (username, password, callback) => {
        setLoading(true)
        const response = await signInAPI(username, password)

        if (response && response.auth_token) {
            localStorage.setItem("token", response.auth_token)
            setToken(response.auth_token)
            callback()
        }
        setLoading(false)
    }
    
    const signOut = () => {
        localStorage.removeItem("token")
        setToken("")
    }

    const register = async (username, password, callback) => {
        setLoading(true)
        const response = await registerAPI(username, password)
        if (response && response.id) {
            callback()
        }
        setLoading(false)
    }

    const value = {
        token,
        loading,
        signIn,
        signOut,
        register,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
