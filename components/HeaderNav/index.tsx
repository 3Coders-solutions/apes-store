import Link from 'next/link'
import styles from './HeaderNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FormEvent } from 'react'

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
  const handleSearch = (ev: any) => {
    ev.preventDefault()
    console.dir(ev.target)
    const formData = Object.fromEntries(new FormData(ev.target))
    console.log(formData)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerTop}>
          <div>logo</div>
          <div className={styles.searcherContainer}>
            <form className={styles.searcher} onSubmit={handleSearch}>
              <button className={styles.searchButton} type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              <input 
                className={styles.searchInput} 
                type="text" 
                name="searchedItem" 
                id="searchedItem" 
                required
              />
            </form>
          </div>
          <div className={styles.loginContainer}>
            <Link href="/login">
              <a className="button-link">Iniciar Sesión</a>
            </Link>
            <Link href="/signup">
              <a className="button-link">Registrarse</a>
            </Link>
          </div>
        </div>
        <nav>
          <ul className={styles.nav_ul}>
            {LINKS.map((link) => (
              <li key={link.title}>
                <Link href={link.href}>
                  <a className="button-link">{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderNav
