import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <div className="container">
                <h1 className="contact-title">Entre em Contato</h1>
                <p className="contact-description">
                    Estamos aqui para ajudar! Se você tiver dúvidas ou comentários, fique à vontade para entrar em contato conosco. Use as informações abaixo ou preencha o formulário para nos enviar uma mensagem diretamente.
                </p>

                <div className="contact-info">
                    <p><strong>Endereço:</strong> 738 Av. Beira Mar, Fortaleza, CE</p>
                    <p><strong>Telefone:</strong> (85) 1234-5678</p>
                    <p><strong>Email:</strong> contato@cafedoamanha.com</p>
                </div>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" id="name" name="name" placeholder="Digite seu nome" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea id="message" name="message" placeholder="Digite sua mensagem" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
