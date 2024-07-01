"use client";
import React, { useState } from "react";
import styles from "../../../styles/register.module.css";

const Create_user = () => {
  const [user, setUser] = useState({
    local: "",
    galeria: "",
    direccion: "",
    altura: "",
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    contrasena: "",
    validarContrasena: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes agregar una validación para asegurarte de que las contraseñas coincidan
    if (user.contrasena === user.validarContrasena) {
      localStorage.setItem("user", JSON.stringify(user));
      alert("Usuario registrado con éxito");
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
    <div className={styles.register_conteiner}>
      <form onSubmit={handleSubmit} className={styles.register}>
        {/* Selector para tipo de local */}
        <select
          name="local"
          onChange={handleChange}
          className={styles.register_f}
        >
          <option value="Local">Local</option>
          <option value="Galeria">Galeria</option>
        </select>
        {/* Campos de texto para información del usuario */}
        <input
          type="text"
          name="galeria"
          placeholder="Número de galería"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="text"
          name="altura"
          placeholder="Altura"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          onChange={handleChange}
          className={styles.register_f}
        />
        <input
          type="password"
          name="validarContrasena"
          placeholder="Validar Contraseña"
          onChange={handleChange}
          className={styles.register_f}
        />
        {/* Botón de envío */}
        <button type="submit" className={styles.register_f}>
          Enviar
        </button>
      </form>
    </div>
    </>
  );
};

export default Create_user;
