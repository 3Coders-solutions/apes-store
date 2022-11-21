import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <p>Producto {id}</p>
  )
}

export default Product
