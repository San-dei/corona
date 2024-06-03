'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

/**
 * Componente de inicio de sesión que maneja la autenticación del usuario.
 * @returns {JSX.Element} - El formulario de inicio de sesión y la lógica de autenticación.
 */
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  /**
   * Maneja el proceso de inicio de sesión.
   * Envía los datos al servidor y maneja la respuesta.
   */
  const handleLogin = async () => {
    // Validación básica en el cliente
    if (!username || !password) {
      setError('Username and Password are required');
      return;
    }

    try {
      // Envío de la solicitud de inicio de sesión al servidor
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // Manejo de la respuesta exitosa y almacenamiento del token en una cookie
        const { token } = await response.json();
        document.cookie = `authToken=${token}; path=/; secure; httponly; samesite=strict`;
        // Redirección a la página protegida
        router.push('/dashboard');
      } else {
        // Manejo de errores de autenticación
        setError('Login failed. Please check your credentials and try again.');
      }
    } catch (err) {
      // Manejo de errores de red u otros
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Email" 
          id="email" 
        />

        <label htmlFor="contrasena">Contraseña</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Contraseña" 
          id="contrasena" 
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        <button type="submit" onClick={handleLogin}>Enviar</button>
      </div>
      <div>
        <Link href="/Forget_password">Olvidé mi contraseña</Link>
      </div>
    </>
  );
};

export default Login;
