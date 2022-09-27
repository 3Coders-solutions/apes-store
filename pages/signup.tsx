import { NextPage } from 'next'

const Signup: NextPage = () => {
  const handleSubmit = (ev: any) => {
    ev.preventDefault()
    const formData = Object.fromEntries(new FormData(ev.target))
    console.log(formData)
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
        <button type="submit">Registrarse</button>
      </form>
    </div>
  )
}

export default Signup
