import React, { createContext, useContext, useState, useEffect } from 'react';
import { login as loginService } from './AuthLoginService';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Indica se o sistema está carregando

    useEffect(() => {
        const loadData = async () => {
            // Simula uma chamada assíncrona de verificação de autenticação ou carregamento de dados
            try {
                // Simulação de um delay (como se estivesse carregando dados de uma API)
                const checkUser = JSON.parse(localStorage.getItem('authUser'));
                // Simulando um tempo de carregamento (poderia ser uma API real)
                await new Promise(resolve => setTimeout(resolve, 1000)); // Aguarda 1 segundo

                if (checkUser) {
                    setUser(checkUser); // Se o usuário estiver no localStorage, configura o estado
                }

                // Coloque aqui qualquer outro processo de carregamento de dados (ex: chamadas de API)
            } catch (error) {
                console.error("Erro ao verificar o usuário ou carregar dados:", error);
            } finally {
                setIsLoading(false); // Carregamento concluído
            }
        };

        loadData(); // Chama a função de carregamento
    }, []); // O array vazio significa que só será executado uma vez quando o componente for montado

    const login = async (userData) => {
        try {
            const loggedInUser = await loginService(userData); // Lógica de login
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