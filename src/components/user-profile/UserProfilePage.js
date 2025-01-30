import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfilePage.css'

const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Tenta pegar o usuário do localStorage
        const authUser = localStorage.getItem('authUser');
        if (authUser) {
            setUser(JSON.parse(authUser));
        } else {
            navigate('/login'); // Se não houver, redireciona para a página de login
        }
    }, [navigate]);

    const handleLogout = () => {
        // Remove o usuário do localStorage e redireciona para o login
        localStorage.removeItem('authUser');
        navigate('/login');
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile-page">
            <div className="user-profile-header">
                <h1>Bem-vindo, {user.nome}!</h1>
            </div>
            <div className="user-profile-info">
                <h2>Informações do Perfil</h2>
                <p className="user-details">
                    <span>ID:</span> {user.usuarioId}
                </p>
                <p className="user-details">
                    <span>Nome:</span> {user.nome}
                </p>
                <p className="user-details">
                    <span>Tipo:</span> {user.tipo}
                </p>
            </div>
        </div>
    );
};

export default UserProfilePage;
