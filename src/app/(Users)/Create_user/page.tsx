const Create_user:React.FC = ():JSX.Element => {
  return (
    <>
      <form>

        <select>
          <option>Local</option>
          <option>Galeria</option>
        </select>
        <input type="text" placeholder="numero de galeria"/>
        <input type="text" placeholder="direccion"/>
        <input type="text" placeholder="Altura"/>
        <input type="text" placeholder="Nombre"/>
        <input type="text" placeholder="Apellido"/>
        <input type="text" placeholder="Telefono"/>
        <input type="text" placeholder="E-mail"/>
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Validar Contraseña" />
        <button type="submit">Enviar</button>
      </form>

    </>
  )
}

export default Create_user