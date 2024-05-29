import React from 'react';
import styles from '../styles/components/Transacciones.module.css';

const Transacciones = () => {
  return (
    <div className={styles.transacciones}>
      <div className={styles.root}>
        <div className={styles.decorator}></div>
        <div className={styles.decorator1}></div>
        <div className={styles.group}>
          <div className={styles.rect}>
            <div className={styles.wrapper}>
              <div className={styles.wrapper1}>
                <div className={styles.wrapper11}>
                  <div className={styles.wrapper12}>Title</div>
                </div>
              </div>
              <div className={styles.wrapper2}>
                <div className={styles.group1}>
                  <div className={styles.wrapper21}>
                    <div className={styles.wrapper3}>
                      <div className={styles.subtitle}>Subtitle</div>
                      <div className={styles.wrapper4}>
                        <div className={styles.text}>Active</div>
                        <img className={styles.image} src="path/to/image" alt="icon" />
                      </div>
                    </div>
                    <div className={styles.wrapper5}>
                      <div className={styles.wrapper51}>
                        <div className={styles.info}>Info</div>
                        <div className={styles.info1}>More Info</div>
                        <div className={styles.info2}>Details</div>
                        <div className={styles.info3}>Extra</div>
                      </div>
                    </div>
                    <div className={styles.rect1}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper6}>
            <div className={styles.box}>
              <div className={styles.wrapper7}>
                <img className={styles.image1} src="path/to/image" alt="icon" />
                <div className={styles.text1}>Some Text</div>
              </div>
            </div>
            <div className={styles.wrapper9}>
              <div className={styles.wrapper91}>
                <div className={styles.text2}>Another Text</div>
              </div>
            </div>
            <div className={styles.box1}>
              <div className={styles.wrapper111}>
                <div className={styles.text3}>More Text</div>
              </div>
            </div>
            <div className={styles.wrapper92}>
              <div className={styles.wrapper93}>
                <div className={styles.text21}>Extra Text</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.decorator2}></div>
      </div>
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
};

export default TransaccionesMarket;
