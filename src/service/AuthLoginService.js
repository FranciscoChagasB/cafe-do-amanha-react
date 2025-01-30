export const login = async ({ email, senha }) => {
    const response = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }), // Envia as credenciais
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Credenciais inválidas');
    }
};