import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/About.module.css'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'

const About: NextPage = () => {
  return (
    <>
    <Head>
      <title>Apes | Nosotros</title>
    </Head>
    <div>
      <HeaderNav />
      <main className={styles.main}>
        <div>
          <p>
            Somos una empresa ubicada en la Ciudad Autónoma de Buenos Aires, que se dedica a la venta y distribución de distintas prendas tanto importadas como de la industria nacional.
          </p>
          <p>
            Nuestro objetivo es facilitar la adquisición de distintos productos a través de un Ecommerce intuitivo y ofreciendo un servicio y atención de calidad las 24hs.
          </p>
        </div>
        <div>
          <Image
            src="/../public/img/logo.jpg"
            alt="Logo img"
            width={250}
            height={250}
          />
        </div>
      </main>
      <section>
        <h2>Nuestros objetivos con los clientes son:</h2>
        <ul>
          <div>
            <Image
              src="/../public/img/about.jpg"
              alt="Imagen ropa de calidad"
              width={50}
              height={50}
            />
          </div>
          <h3>Ropa de calidad</h3>
          <p></p>
        </ul>
        <ul>
          <div>
            <Image
              src="/../public/img/about.jpg"
              alt="Imagen precios accesibles"
              width={50}
              height={50}
            />
          </div>
          <h3>Precios accesibles</h3>
          <p></p>
        </ul>
        <ul>
          <div>
            <Image
              src="/../public/img/about.jpg"
              alt="Imagen confianza"
              width={50}
              height={50}
            />
          </div>
          <h3>Confianza</h3>
          <p></p>
        </ul>
      </section>
      <FooterNav />
    </div>
    </>
  )
}

export default About
