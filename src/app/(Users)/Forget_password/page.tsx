import styles from "../../../styles/forgetpassword.module.css"

const Forget_password = () => {
  return (<>
    <article className={styles.foerget_article}>
        <section className={styles.forget_section}>
          <div className={styles.forget_inputs}>
            <label htmlFor='email' className={styles.input}>Email de recuperacion:</label>
            <input type="text" placeholder="Email" id="email" className={styles.input}/>
          </div>
          <button type="submit" className={styles.submit}>Enviar</button>
        </section>
      </article>
  </>)
}

export default Forget_password;