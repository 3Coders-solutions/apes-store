import { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Contact.module.css'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'

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
          <div>
            <h2>Contactanos</h2>
            <ul>
              <li>0810-888-3398</li>
              <li>Whatsapp</li>
              <li>Email</li>
              <li>Ubicacion</li>
            </ul>
            <div>
              mini mapa
            </div>
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
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" cols={30} rows={10}></textarea>
              </div>
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
