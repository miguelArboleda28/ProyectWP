// Login.jsx

import container from "../styles/components/Container.module.css";
import header from "../styles/components/Header.module.css";
import body from "../styles/components/Body.module.css";
import footer from "../styles/components/Footer.module.css";
import styles from "../styles/Login.module.css"; // Importa el módulo CSS

function Login() {
  return (
    <div className={container.container}>
      <header className={header.header}></header>
      <main className={`${body.body} ${styles.body}`}>
        <h1>Login</h1>
        <form className={styles.container_login}>
          <div className={styles.container_email}>
            <label htmlFor="email" className={styles.label_email}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input_email}
              placeholder="ejemplo@correo.iue.edu.co"
              required
            />
          </div>
          <div className={styles.container_password}>
            <label className={styles.label_password} htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className={styles.input_password}
              placeholder="Ingresa tu contrasena"
              type="password"
              required
            />
          </div>
          <button type="submit" className={styles.button_login}>
            Sign In
          </button>
        </form>

        <div className={styles.divider}>
          <span className={styles.divider_line} />
          <span className={styles.divider_text}>or</span>
          <span className={styles.divider_line} />
        </div>

        <div className={styles.container_additional}>
          <button className={styles.button_forgot}>Forgot Password</button>
          <button className={styles.button_register}>Sign Up</button>
        </div>
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

export default Login;
