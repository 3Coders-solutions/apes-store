import Link from 'next/link'
import styles from './HeaderNav.module.css'

const LINKS = [
  {
    title: 'Inicio',
    href: '/'
  },
  {
    title: 'Catálogo',
    href: '/clothing'
  },
  {
    title: 'Nosotros',
    href: '/about'
  },
  {
    title: 'Contacto',
    href: '/contact'
  }
]

const HeaderNav = () => {
  return (
    <header>
      <div>
        <div>
          buscador
        </div>
        <div>
          log in sign up
        </div>
      </div>
      <nav>
        <ul className={styles.nav_ul}>
          {LINKS.map((link) => (
            <li key={link.title}>
              <Link href={link.href}>
                <a className="nav-link">{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
