import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '@styles/Signup.module.css'
import axios from 'axios'

const Signup: NextPage = () => {
  useEffect(() => {
    if(localStorage.getItem("user")){
      //@ts-ignore
      window.location = '/' 
    }
  })

  const [error, setError] = useState('')

  const handleSubmit = async (ev: any) => {
    const form = ev.target
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(form))
    axios.post('/api/auth/signup', formData)
    .then(e => 
      {
        localStorage.setItem("user", e.data.email)
        //@ts-ignore
        window.location = '/' 
      })
    .catch(e => {
      setError("Error al crear cuenta");
    });
    form.reset()
  }

  return (
    <div className="container center-screen">
      {error ? <p>{error}</p> : null}
      <form className={`form ${styles.form}`} onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text" 
          id="email"
          name="email"
          required
        />
        <label htmlFor="name">Nombre: </label>
        <input 
          type="text" 
          id="name"
          name="name"
          required
        />
        <label htmlFor="surname">Apellido: </label>
        <input 
          type="text" 
          id="surname"
          name="surname"
          required
        />
        <label htmlFor="password">Contraseña: </label>
        <input 
          type="password" 
          id="password"
          name="password"
          required
        />
        <label htmlFor="password">Confirmar contraseña: </label>
        <input 
          type="password" 
          id="password-confirmation"
          name="passwordConfirmation"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default Signup
