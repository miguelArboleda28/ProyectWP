import container from "../styles/components/Container.module.css";
import header from "../styles/components/Header.module.css";
import body from "../styles/components/Body.module.css";
import footer from "../styles/components/Footer.module.css";
import styles from "../styles/Forgot.module.css";

function Forgot() {
  return (
    <div className={container.container}>
      <header className={header.header}></header>

      <main className={`${body.body} ${styles.body}`}>
        <h1>Forgot Password</h1>
        <form className={styles.container_forgot}>
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

          <button type="submit" className={styles.button_search}>
            Search
          </button>

          <div className={styles.container_password}>
            <label className={styles.label_password} htmlFor="password">
              Forgot Password
            </label>
            <input
              id="password"
              className={styles.input_password}
              placeholder="Tu contrasena"
              type="text"
              disabled
            />
          </div>

          <button type="submit" className={styles.button_next}>
            Next
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

export default Forgot;
