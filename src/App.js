import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './service/AuthContextService';
import ProtectedRoute from './components/ProtectedRoute';
import Contact from './components/Contact';
import Stories from './components/Stories';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Loading from './components/Loading'
import './App.css';

function Root() {
    const { isAuthenticated, isLoading } = useAuth();

    // Exibe o componente de loading enquanto estiver carregando
    if (isLoading) {
        return <Loading />;
    }

    return (
        <Routes>
            {/* Rota para redirecionar para o login se não estiver autenticado */}
            <Route
                path="/"
                element={isAuthenticated ? <Navigate to="/contato" /> : <Navigate to="/login" />}
            />

            {/* Rota pública para o login */}
            <Route path="/login" element={<Login />} />

            {/* Rotas protegidas */}
            <Route
                path="/contato"
                element={
                    <ProtectedRoute>
                        <Contact />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/historias"
                element={
                    <ProtectedRoute>
                        <Stories />
                    </ProtectedRoute>
                }
            />

            {/* Rota para páginas não encontradas */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <Root /> {/* Agora usamos o componente Root dentro do AuthProvider */}
            </AuthProvider>
        </Router>
    );
}

export default App;