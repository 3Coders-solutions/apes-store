import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/About.module.css'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faHandHoldingDollar, faHandshake } from '@fortawesome/free-solid-svg-icons'

const About: NextPage = () => {
  return (
    <>
    <Head>
      <title>Apes | Nosotros</title>
    </Head>
    <div>
      <HeaderNav />
      <h1 className={styles.title}>Nosotros</h1>
      <main className={`${styles.main} container`}>
        <div>
          <p>
            Somos una empresa ubicada en la Ciudad Autónoma de Buenos Aires, que se dedica a la venta y distribución de distintas prendas tanto importadas como de la industria nacional.
          </p>
          <p>
            Nuestro objetivo es facilitar la adquisición de distintos productos a través de un Ecommerce intuitivo, ofreciendo un servicio de calidad y estando siempre a disposición del cliente.
          </p>
        </div>
        <div>
          <Image
            src="/img/logo.jpg"
            alt="Logo img"
            width={250}
            height={250}
          />
        </div>
      </main>
      <section className={styles.objectivesSection}>
        <div className="container">
          <h2>Nos caracterizamos por brindar:</h2>
          <ul className={styles.objectivesContainer}>
            <li>
              <h3>Ropa de calidad</h3>
              <div>
                <FontAwesomeIcon icon={faClipboardCheck} />
              </div>
              <p>Trabajamos exclusivamente con proveedores de primera calidad</p>
            </li>
            <li>
              <h3>Precios accesibles</h3>
              <div>
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </div>
              <p>Ofrecemos nuestros productos al mejor precio del mercado</p>
            </li>
            <li>
              <h3>Confianza</h3>
              <div>
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <p>Priorizamos la atención y calidad de servicio para nuestros clientes</p>
            </li>
          </ul>
        </div>
      </section>
      <FooterNav />
    </div>
    </>
  )
}

export default About
