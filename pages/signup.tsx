import { NextPage } from 'next'

const Signup: NextPage = () => {
  const handleSubmit = async (ev: any) => {
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(ev.target))
    const res = await fetch('http://localhost:3000/api/auth/signup', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    console.log('respuesta:', data)
  }

  return (
    <div className="container center-screen">
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
