import { NextPage } from 'next'
import Head from 'next/head'
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
      <h1>Contacto</h1>
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
        <form onSubmit={handleMessageSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Nombre</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="number">Nombre</label>
          <input type="tel" name="number" id="number" />
          <label htmlFor="message"></label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </form>
      </div>
      <FooterNav />
    </div>
    </>
  )
}

export default Contact
