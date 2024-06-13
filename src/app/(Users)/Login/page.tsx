'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter de Next.js
import Link from 'next/link';

const Login = () => {
  const router = useRouter(); // Crea una instancia de useRouter
  const [credentials, setCredentials] = useState({
    email: '',
    contrasena: '',
  });

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser.email === credentials.email && storedUser.contrasena === credentials.contrasena) {
      alert('Inicio de sesión exitoso');
      router.push('/User_profile'); // Redirige al perfil del usuario
    } else {
      alert('Credenciales incorrectas');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Email" onChange={handleChange} />
          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" id="contrasena" placeholder="Contraseña" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div>
        <Link href="/Forget_password">Olvidé mi contraseña</Link>
      </div>
    </>
  );
};

export default Login;
