import container from "../styles/components/Container.module.css";
import header from "../styles/components/Header.module.css";
import body from "../styles/components/Body.module.css";
import footer from "../styles/components/Footer.module.css";
import styles from "../styles/Register.module.css";

function Register() {
  return (
    <div className={container.container}>
      <header className={header.header}></header>
      <main className={`${body.body} ${styles.body}`}>
        <form className={styles.container_register}>
          <h1>Register</h1>

          <div className={styles.container_email}>
            <label className={styles.label_email}>Email</label>
            <input
              className={styles.input_email}
              placeholder="email@correo.com"
              type="email"
              required
            />
          </div>

          <div className={styles.container_password}>
            <label className={styles.label_password}>Password</label>
            <input
              className={styles.input_password}
              placeholder="Ingresa tu contrasena"
              type="password"
              required
            />
          </div>

          <div className={styles.container_confirm}>
            <label className={styles.label_confirm}>Confirm password</label>
            <input
              className={styles.input_confirm}
              placeholder="confirma tu contrasena"
              type="password"
              required
            />
          </div>

          <button type="submit" className={styles.button_register}>
            Sign Up
          </button>
        </form>
      </main>

      <footer className={footer.footer}>
        <div className={footer.container_copy}>
          <p>
            © 2024 Proyecto realizado por Andrés Henao, David y Miguel Arboleda.
            Todos los derechos reservados.
          </p>
          <p>
            Repositorio:
            <a href="https://github.com/miguelArboleda28/ProyectWP">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
