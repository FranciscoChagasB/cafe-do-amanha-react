import React, { useState } from 'react';
import { useAuth } from '../../service/AuthContextService';
import { Link } from 'react-router-dom';
import './UserProfile.css'

const UserProfile = () => {
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        window.location.href = '/login'; // Redireciona após logout
    };

    return (
        <div className="user-profile">
            {/* Ícone de usuário redondo */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="user-icon">
                <i className="fa fa-user"></i> {/* Ícone de usuário */}
            </button>

            {/* Menu que se expande */}
            {menuOpen && (
                <div className="user-menu">
                    <Link to="/perfil" className="menu-item">Perfil</Link>
                    <button onClick={handleLogout} className="menu-item">Logout</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
