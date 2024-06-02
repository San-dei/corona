const Forget_password = () => {
  return (<>
    <article>
        <section>
          <div>
            <label htmlFor='email'>Email de recuperacion:</label>
            <input type="text" placeholder="Email" id="email"/>
          </div>
          <button type="submit">Enviar</button>
        </section>
      </article>
  </>)
}

export default Forget_password;