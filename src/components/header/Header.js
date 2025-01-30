import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../service/AuthContextService';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth(); // Pegando os dados do contexto de autenticação

    const handleLogout = () => {
        logout();
        window.location.href = '/login'; // Redirecionando para a página de login após logout
    };

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="brand">Café do Amanhã</Link>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </button>
                <nav className={menuOpen ? "nav open" : "nav"}>
                    <ul>
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Início</Link></li>
                        <li><Link to="/sobre-nos" onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
                        <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
                        <li><Link to="/pedidos" onClick={() => setMenuOpen(false)}>Pedidos</Link></li>
                        <li><Link to="/historias" onClick={() => setMenuOpen(false)}>Histórias</Link></li>
                        <li><Link to="/contato" onClick={() => setMenuOpen(false)}>Contato</Link></li>
                    </ul>
                    {/* Renderizando o botão de logout apenas se o usuário estiver autenticado */}
                    {isAuthenticated && (
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Header;