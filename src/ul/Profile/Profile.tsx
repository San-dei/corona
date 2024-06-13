'use client'
import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
    // Agrega aquí más datos que quieras mostrar
  });

  useEffect(() => {
    // Recuperar los datos del usuario de localStorage al cargar el componente
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div>
      <h1>Bienvenido, {user.nombre} {user.apellido}</h1>
      <p>Email: {user.email}</p>
      {/* Muestra aquí más datos del usuario */}
    </div>
  );
};

export default Profile;
