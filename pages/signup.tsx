import { NextPage } from 'next'
import { useState } from 'react'

const Signup: NextPage = () => {
  const [error, setError] = useState('')

  const handleSubmit = async (ev: any) => {
    const form = ev.target
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(form))
    const res = await fetch('http://localhost:3000/api/auth/signup', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    if (data.error) {
      setError(data.error.message)
      return
    }
    form.reset()
  }

  return (
    <div className="container center-screen">
      {error ? <p>{error}</p> : null}
      <form className="form" onSubmit={handleSubmit}>
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
