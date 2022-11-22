import { NextPage } from 'next'
import { useEffect } from 'react';
const Login: NextPage = () => {
  useEffect(() => {
    localStorage.removeItem("user")
        //@ts-ignore
        window.location = '/' 
    
  })
  return (
<>
</>
    )
}

export default Login
