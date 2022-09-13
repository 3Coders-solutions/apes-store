import { NextPage } from 'next'
import styles from '../styles/Signup.module.css'

const Signup: NextPage = () => {
  const handleSubmit = (ev: any) => {
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(ev.target))
    console.log(formData)
  }

  return (
    <div className="container center-screen">
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text" 
          id="email"
          name="email"
        />
        <label htmlFor="name">Nombre: </label>
        <input 
          type="text" 
          id="name"
          name="name"
        />
        <label htmlFor="surname">Apellido: </label>
        <input 
          type="text" 
          id="surname"
          name="surname"
        />
        <label htmlFor="password">Contraseña: </label>
        <input 
          type="password" 
          id="password"
          name="password"
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default Signup
