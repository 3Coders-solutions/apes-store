import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'

const Product = () => {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState<any>({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setIsLoading(false)
        console.log(product)
      })
  }, [])

  return (
    <>
    <Head>
      <title>{}</title>
    </Head>
    <div>
      <HeaderNav/>
      {isLoading ? (
        <h3>Cargando producto...</h3>
      ) : (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img width={250} src={product.image} alt="Imagen del producto" />
          <h3>Precio ${product.price}</h3>
          <p>Calificaciones del producto: {product.rating.rate}</p>
          <p>Opiniones de {product.rating.count} clientes</p>
        </div>
      )}
      <FooterNav />
    </div>
    </>
  )
}

export default Product
