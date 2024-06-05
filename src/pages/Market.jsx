import React from 'react';
import container from "../styles/components/Container.module.css";
import header from "../styles/components/Header.module.css";
import body from "../styles/components/Body.module.css";
import footer from "../styles/components/Footer.module.css";
import styles from "../styles/Login.module.css";

// Asegúrate de importar todas las imágenes y otros assets correctamente
import decorator from './assets/36b79c4100d1d9381f9ed4493b61db2d.svg';
import decorator1 from './assets/2819f5d796912a0bebe1220b43cc35de.svg';
import image6 from './assets/e6225429bfe79974c3eaede644b254b9.svg';
import image61 from './assets/a770d6d4dc1b53b891948216a1fa1beb.svg';
import image62 from './assets/6aa7e007a39dd840c35a6a555ebed9af.svg';
import image63 from './assets/4535c07b78366688203316729db9c7e0.svg';
import imageA from './assets/a115a0c8bb34a775dada55e524af4e69.svg';
import imageMeta from './assets/neon_yellow_mountain_chart.png';
import imageApple from './assets/6eef50ab5bd00c73a8da3a4830d65164.svg';
import imageNetflix from './assets/05b4fb8e3f8737131f835e65b4de66e0.svg';
import image4 from './assets/971df5fa1f80d587329de352f324c010.svg';
import line1 from './assets/3c1ed8f6ad1e92d83c389ce00ce318d2.svg';
import line2 from './assets/39541a7c44c0a33add98e16cb9301894.svg';
import line3 from './assets/5f63335bd7f018a49baa58dc387bbd4f.svg';
import line4 from './assets/be620e2d7a18c3035a2e6e1f3d478505.svg';
import line5 from './assets/00d10358b5ef2582bc4d1e4c2c1eb992.svg';
import image5 from './assets/15bdaf68b2f09fcd40c36961dbccd1b5.svg';

const Mercado = () => {
  return (
    <div className={`mercado root ${styles.flexColumn}`}>
      <img className={styles.decorator} src={decorator} alt="decorator" />
      <img className={styles.decorator1} src={decorator1} alt="decorator1" />
      <div className={styles.flexRow}>
        <div className={styles.wrapper22}>
          <div className={styles.box10}>
            <div className={styles.wrapper23}>
              <img className={styles.image6} src={image6} alt="Mercado" />
              <div className={styles.text5}>Mercado</div>
            </div>
          </div>
          <div className={styles.box11}>
            <div className={styles.wrapper25}>
              <img className={styles.image6} src={image61} alt="Acciones" />
              <div className={styles.text6}>Acciones</div>
            </div>
          </div>
          <div className={styles.wrapper231}>
            <div className={styles.wrapper23}>
              <img className={styles.image6} src={image62} alt="Transacciones" />
              <div className={styles.text51}>Transacciones</div>
            </div>
          </div>
          <div className={styles.wrapper231}>
            <div className={styles.wrapper23}>
              <img className={styles.image6} src={image63} alt="Ajustes" />
              <div className={styles.text52}>Ajustes</div>
            </div>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.rect}></div>
          <div className={styles.wrapper}>
            <div className={styles.wrapper1}>
              <div className={styles.wrapper2}>
                <h2 className={styles.mediumTitle}>Mercado</h2>
                <div className={styles.wrapper3}>
                  <div className={styles.text}>Verlas todas</div>
                  <img className={styles.image} src={imageA} alt="Verlas todas" />
                </div>
              </div>
              <div className={styles.wrapper4}>
                <div className={styles.group1}>
                  <div className={styles.rect1}></div>
                  <div className={styles.box}>
                    <div className={styles.wrapper5}>
                      <div className={styles.wrapper6}>
                        <div className={styles.text1}>Netflix</div>
                        <h3 className={styles.subtitle}>$416.03</h3>
                      </div>
                      <div className={styles.wrapper7}>
                        <h3 className={styles.subtitle1}>NFLX</h3>
                        <div className={styles.info}>+2.37%</div>
                      </div>
                    </div>
                    <div className={styles.wrapper8}>
                      <img className={styles.image2} src={imageNetflix} alt="Netflix" />
                    </div>
                  </div>
                </div>
                <div className={styles.group1}>
                  <div className={styles.rect1}></div>
                  <div className={styles.box1}>
                    <div className={styles.wrapper9}>
                      <div className={styles.wrapper61}>
                        <div className={styles.text11}>Meta</div>
                        <h3 className={styles.subtitle2}>$285.50</h3>
                      </div>
                      <div className={styles.wrapper10}>
                        <h3 className={styles.subtitle11}>META</h3>
                        <div className={styles.info1}>-0.44%</div>
                      </div>
                    </div>
                    <img className={styles.image1} src={imageMeta} alt="Meta" />
                  </div>
                </div>
                <div className={styles.group1}>
                  <div className={styles.rect1}></div>
                  <div className={styles.box1}>
                    <div className={styles.wrapper5}>
                      <div className={styles.wrapper62}>
                        <div className={styles.text12}>Apple</div>
                        <h3 className={styles.subtitle3}>$178.61</h3>
                      </div>
                      <div className={styles.wrapper71}>
                        <h3 className={styles.subtitle12}>AAPL</h3>
                        <div className={styles.info2}>+1.36%</div>
                      </div>
                    </div>
                    <div className={styles.wrapper8}>
                      <img className={styles.image2} src={imageApple} alt="Apple" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapper11}>
              <div className={styles.group2}>
                <article className={styles.box7}>
                  <div className={styles.info21}>Agosto 12</div>
                  <h5 className={styles.highlight1}>$9,239.12</h5>
                </article>
                <div className={styles.box3}>
                  <div className={styles.wrapper12}>
                    <div className={styles.wrapper13}>
                      <h5 className={styles.highlight}>Total Invertido</h5>
                      <h2 className={styles.mediumTitle1}>$10,216.53</h2>
                    </div>
                    <div className={styles.wrapper14}>
                      <div className={styles.box4}>
                        <div className={styles.text2}>Dia</div>
                      </div>
                      <div className={styles.box5}>
                        <div className={styles.text21}>Semana</div>
                      </div>
                      <div className={styles.box6}>
                        <div className={styles.text3}>Mes</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper15}>
                    <div className={styles.group3}>
                      <img className={styles.image3} src={image4} alt="Chart" />
                      <div className={styles.wrapper16}>
                        <img className={styles.line} src={line1} alt="line1" />
                        <img className={styles.line1} src={line2} alt="line2" />
                        <img className={styles.line11} src={line3} alt="line3" />
                        <img className={styles.line2} src={line4} alt="line4" />
                        <img className={styles.line3} src={line5} alt="line5" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.wrapper17}>
                    <div className={styles.text4}>Hoy</div>
                    <div className={styles.wrapper18}>
                      <div className={styles.wrapper19}>
                        <h5 className={styles.highlight2}>$147.78</h5>
                        <div className={styles.info3}>+$26.78</div>
                      </div>
                      <div className={styles.wrapper20}>
                        <div className={styles.info4}>Total Movido</div>
                        <div className={styles.info5}>Total Comisiones</div>
                      </div>
                      <div className={styles.wrapper21}>
                        <h5 className={styles.highlight3}>$121.00</h5>
                        <h5 className={styles.highlight4}>$24.53</h5>
                      </div>
                    </div>
                    <img className={styles.image5} src={image5} alt="Arrow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default Mercado;
