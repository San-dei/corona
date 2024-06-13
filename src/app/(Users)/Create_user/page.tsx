'use client'
import React, { useState } from 'react';

const Create_user = () => {
  const [user, setUser] = useState({
    local: '',
    galeria: '',
    direccion: '',
    altura: '',
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    contrasena: '',
    validarContrasena: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Aquí puedes agregar una validación para asegurarte de que las contraseñas coincidan
    if (user.contrasena === user.validarContrasena) {
      localStorage.setItem('user', JSON.stringify(user));
      alert('Usuario registrado con éxito');
    } else {
      alert('Las contraseñas no coinciden');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Selector para tipo de local */}
        <select name="local" onChange={handleChange}>
          <option value="Local">Local</option>
          <option value="Galeria">Galeria</option>
        </select>
        {/* Campos de texto para información del usuario */}
        <input type="text" name="galeria" placeholder="Número de galería" onChange={handleChange} />
        <input type="text" name="direccion" placeholder="Dirección" onChange={handleChange} />
        <input type="text" name="altura" placeholder="Altura" onChange={handleChange} />
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
        <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange} />
        <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        <input type="password" name="contrasena" placeholder="Contraseña" onChange={handleChange} />
        <input type="password" name="validarContrasena" placeholder="Validar Contraseña" onChange={handleChange} />
        {/* Botón de envío */}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Create_user;
