import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [jwtToken, setJwtToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setJwtToken('');

    // 1. Reglas de Validación en el Cliente (Frontend)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex para Contraseña: Al menos 1 mayúscula, 1 número y 1 caracter especial
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;

    if (!emailRegex.test(email)) {
      return setError('Por favor, ingresa un correo electrónico válido.');
    }

    if (!passwordRegex.test(password)) {
      return setError('La contraseña debe contener al menos una letra mayúscula, un número y un carácter de puntuación.');
    }

    // 2. Enviar datos al Backend si la validación pasa
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // 3. Recibir y mostrar el JWT
        setJwtToken(data.token);
        console.log('Token recibido:', data.token);
      } else {
        setError('Error en el servidor al generar el token.');
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. ¿Está el backend encendido?');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h2>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label>Correo Electrónico:</label><br />
          <input 
            type="text" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <label>Contraseña:</label><br />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

        <button type="submit" style={{ padding: '10px', cursor: 'pointer' }}>
          Generar JWT
        </button>
      </form>

      {jwtToken && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e8f5e9', border: '1px solid #4caf50' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#2e7d32' }}>¡Login Exitoso!</h4>
          <p style={{ margin: 0, wordBreak: 'break-all', fontSize: '12px' }}><strong>JWT:</strong> {jwtToken}</p>
        </div>
      )}
    </div>
  );
}

export default App;