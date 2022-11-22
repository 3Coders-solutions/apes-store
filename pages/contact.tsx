import { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Contact.module.css'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'
import ResponsiveImage from '@components/ResponsiveImage'
import Link from 'next/link'



const CONTACT_LINKS = [
  {
    title: 'Email',
    href: 'https://gmail.com'
  },
  {
    title: 'Whatsapp',
    href: 'https://web.whatsapp.com/'
  },
  {
    title: 'Ubicacion',
    href: 'https://www.google.com.ar/maps/@-34.6189702,-58.5180901,19.88z'
  },
]

const Contact: NextPage = () => {
  const handleMessageSubmit = (ev: any) => {
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(ev.target))
    console.log(formData)
  }

  return (
    <>
    <Head>
      <title>Apes | Contacto</title>
    </Head>
    <div>
      <HeaderNav/>
      <main className='container'>
        <h1 className={styles.title}>Contacto</h1>
        <div className={styles.mainContent}>
          <div className={styles.contactInfo}>
            <h2>Contactanos</h2>
            <ul>
              <li>0810-888-3398</li>
              {CONTACT_LINKS.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>
                    <a className="default-link" target="_blank">{link.title}</a>
                  </Link>
                </li>
              ))}
              <li className={styles.mapContainer} >
                <ResponsiveImage imgSrc='/img/img-placeholder.png' imgAlt='Ubicacion de Google Maps' />
              </li>
            </ul>
          </div>
          <div>
            <h2>Envianos un mensaje</h2>
            <form className={styles.contactForm} onSubmit={handleMessageSubmit}>
              <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Mail</label>
                <input type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="number">Numero de teléfono <span className={styles.smallText}>(opcional)</span></label>
                <input type="tel" name="number" id="number" />
              </div>
              <div>
                <label  htmlFor="message">Mensaje</label>
                <textarea name="message" id="message"  rows={10}></textarea>
              </div>
              <button className={styles.submitButton}>Enviar</button>
            </form>
          </div>
        </div>
      </main>
      <FooterNav />
    </div>
    </>
  )
}

export default Contact
