import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './service/AuthContextService';
import ProtectedRoute from './service/ProtectedRoute';
import Contact from './components/contact/Contact';
import Stories from './components/stories/Stories';
import NotFound from './components/pages-status/NotFound';
import Login from './components/login/Login';
import Loading from './components/pages-status/Loading';
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import OrderPage from './components/order-page/OrderPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Review from './components/review/Review';
import UserProfilePage from './components/user-profile/UserProfilePage';
import './components/footer/Footer.css';
import './components/header/Header.css';

function Root() {
    const { isAuthenticated, isLoading } = useAuth();

    // Exibe o componente de loading enquanto estiver carregando
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {isAuthenticated && <Header />} {/* Mostra o Header apenas se autenticado */}
            <Routes>
                {/* Rota para redirecionar para o login se não estiver autenticado */}
                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />}
                />
                {/* Rota pública para o login */}
                <Route
                    path="/login"
                    element={isAuthenticated ? <Navigate to="/home" /> : <Login />}
                />
                {/* Rotas protegidas */}
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/sobre-nos"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/menu"
                    element={
                        <ProtectedRoute>
                            <Menu />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/pedidos"
                    element={
                        <ProtectedRoute>
                            <OrderPage />
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
                <Route
                    path="/contato"
                    element={
                        <ProtectedRoute>
                            <Contact />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/avaliacao"
                    element={
                        <ProtectedRoute>
                            <Review />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/perfil"
                    element={
                        <ProtectedRoute>
                            <UserProfilePage />
                        </ProtectedRoute>
                    }
                />
                {/* Rota para páginas não encontradas */}
                <Route path="*" element={<NotFound />} />
            </Routes>
            {isAuthenticated && <Footer />} {/* Mostra o Footer apenas se autenticado */}
        </div>
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
