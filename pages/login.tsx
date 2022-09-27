import { NextPage } from 'next'

const Login: NextPage = () => {
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
