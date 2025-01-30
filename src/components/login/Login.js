import React, { useState } from 'react';
import { useAuth } from '../../service/AuthContextService';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamando o login do contexto, que usa o AuthService internamente
      await login({ email, senha });

      // Redirecionando para a página de contatos após o login
      navigate('/home');  // Ou qualquer outra página desejada
    } catch (err) {
      if (err.message === 'Failed to fetch') {
        setError('Erro interno do servidor. Tente novamente mais tarde.');
      } else {
        setError(err.message || 'Erro ao fazer login');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}  {/* Exibe o erro aqui */}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;