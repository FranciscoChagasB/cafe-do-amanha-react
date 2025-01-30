import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../service/AuthContextService';
import UserProfile from '../user-profile/UserProfile';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isAuthenticated } = useAuth(); // Pegando os dados do contexto de autenticação

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
                        <li><Link to="/avaliacao" onClick={() => setMenuOpen(false)}>Avaliações</Link></li>
                    </ul>

                    {/* Exibe o UserProfile apenas se o usuário estiver autenticado */}
                    {isAuthenticated && <div className="user-profile-container"><UserProfile /></div>}
                </nav>
            </div>
        </header>
    );
}

export default Header;