import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email" />

        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" placeholder="Contraseña" id="contrasena" />
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
      <div>
        <Link href="/Forget_password">olvide mi contraseña</Link>
      </div>
    </>
  );
};

export default Login;
