import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './HeaderNav.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
const LINKS = [
  {
    title: 'Inicio',
    href: '/'
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
  const [user, setUser] = useState(null)
  useEffect(() => {
    axios.post('/api/auth/user', 
    {email:localStorage.getItem("user")}
    )
    .then(({data}) => {
      if(data) setUser(data);
      //@ts-ignore
      else if (localStorage.getItem("user")) window.location = '/logout'
    })
    .catch(e => console.error(e))
  }, [])
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
          <Link href="/">
            <a>
              <Image
                src="/img/logo.jpg"
                alt="Logo img"
                width={50}
                height={50}
              />
            </a>
          </Link>
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
          {user ? (
            //@ts-ignore
            <div>Bienvenido {user.name} <Link href="/logout">
            <a className="button-link">Cerrar Sesion</a>
          </Link></div>
          ) : (
            <div className={styles.loginContainer}>
              <Link href="/login">
                <a className="button-link">Iniciar Sesión</a>
              </Link>
              <Link href="/signup">
                <a className="button-link">Registrarse</a>
              </Link>
            </div>
          )}
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
