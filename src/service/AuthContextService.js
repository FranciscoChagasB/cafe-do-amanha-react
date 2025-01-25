import React, { createContext, useContext, useState } from 'react';
import { login as loginService } from './AuthLoginService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const login = async (userData) => {
        try {
            const loggedInUser = await loginService(userData);
            setUser(loggedInUser);
            localStorage.setItem('authUser', JSON.stringify(loggedInUser));
        } catch (error) {
            throw new Error(error.message || 'Erro ao fazer login');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('authUser');
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);