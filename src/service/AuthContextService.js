import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as loginService } from './AuthLoginService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Estado para indicar se está carregando

    useEffect(() => {
        const checkUser = JSON.parse(localStorage.getItem('authUser'));
        if (checkUser) {
            setUser(checkUser);
        }
        setIsLoading(false); // Depois de checar, finalize o carregamento
    }, []);

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
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);