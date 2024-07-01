'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter de Next.js
import Link from 'next/link';
import styles from "../../../styles/login.module.css"

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
      <form onSubmit={handleSubmit} className={styles.login_form_conteiner}>
        <div className={styles.login_form}>
          <label htmlFor="email" className={styles.login_email}>Email</label>
          <input type="text" id="email" placeholder="Email" onChange={handleChange} className={styles.login_form_email}/>
          <label htmlFor="contrasena" className={styles.login_contrasena}>Contraseña</label>
          <input type="password" id="contrasena" placeholder="Contraseña" onChange={handleChange} className={styles.login_form_contrasena_ver}/>
        </div>
        <div className={styles.login_btn}>
          <button type="submit" className={styles.login_submit}>Enviar</button>
        </div>
      <div>
        <Link href="/Forget_password" className={styles.login_forget}>Olvidé mi contraseña</Link>
      </div>
      </form>
    </>
  );
};

export default Login;
