import { NextPage } from 'next'
import axios from 'axios';
import { useEffect } from 'react';
import styles from '@styles/Login.module.css'

const Login: NextPage = () => {
  useEffect(() => {
    if(localStorage.getItem("user")){
      //@ts-ignore
      window.location = '/' 
    }
  })

  const handleSubmit = (ev: any) => {
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(ev.target))
    axios.post('/api/auth/login', formData)
    .then(({data}) => {
      localStorage.setItem("user",data.email)
      //@ts-ignore
      window.location = '/'
    })
    .catch(e => console.error(e))
    console.log(formData)
  }

  return (
    <div className="container center-screen">
      <form className={`form ${styles.form}`} onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="text" 
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Contraseña: </label>
        <input 
          type="password" 
          id="password"
          name="password"
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default Login
