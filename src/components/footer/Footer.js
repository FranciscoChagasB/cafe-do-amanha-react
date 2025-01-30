import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2025 Café do Amanhã. Todos os direitos reservados.</p>
                <address>
                    <p>
                        738 Av. Beira Mar, Fortaleza, CE |
                        <a href="tel:+558512345678" aria-label="Ligar para o telefone de contato">
                            (85) 1234-5678
                        </a>
                    </p>
                </address>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <span className="sr-only">Instagram</span>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                        <span className="sr-only">Twitter</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;