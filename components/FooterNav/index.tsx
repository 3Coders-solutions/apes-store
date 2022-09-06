import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import styles from './FooterNav.module.css'

const SOCIAL_LINKS = [
  {
    title: 'instagram',
    href: 'https://instagram.com',
    icon: faInstagram
  },
  {
    title: 'twitter',
    href: 'https://twitter.com',
    icon: faTwitter
  },
  {
    title: 'facebook',
    href: 'https://facebook.com',
    icon: faFacebook
  }
]

const CONTACT_LINKS = [
  {
    title: 'Email',
    href: 'https://gmail.com'
  },
  {
    title: 'Whatsapp',
    href: 'https://web.whatsapp.com/'
  }
]

const FooterNav = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.flexContainer}>
          <div>
            <h3 className={styles.columnTitle}>Institucional</h3>
            <ul className={styles.columnList}>
              <li><a href="#" className="default-link">Términos y condiciones</a></li>
              <li><a href="#" className="default-link">Política de privacidad</a></li>
              <li><a href="#" className="default-link">Política de cookies</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.columnTitle}>Redes Sociales</h3>
            <ul className={styles.columnList}>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>
                    <a className={`social-link social-link--${link.title}`} target="_blank"><FontAwesomeIcon icon={link.icon} /> {link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.columnTitle}>Centro de atención al cliente</h3>
            <ul className={styles.columnList}>
              <li>Lunes a Viernes de 8 a 17</li>
              <li>Sábados de 8 a 12</li>
            </ul>
            <ul className={styles.columnList}>
              {CONTACT_LINKS.map((link) => (
                <li key={link.title}>
                  <Link href={link.href}>
                    <a className="default-link" target="_blank">{link.title}</a>
                  </Link>
                </li>
              ))}
              <li>0810-888-3398</li>
            </ul>
          </div>
        </div>
        <p>APES 2022 || Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default FooterNav
