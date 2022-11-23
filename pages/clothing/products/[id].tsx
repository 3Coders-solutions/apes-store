import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '@styles/Product.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
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
        <div className={`container ${styles.productCard}`}>
          <div className={styles.imageContainer}>
            <Image 
              src={product.image}
              alt={`Imagen de producto: ${product.title}`}
              layout="fill"
            />
          </div>
          <div className={styles.productInfo}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            <div className={styles.productDetails}>
              <h3>${product.price}</h3>
              <p>Calificaciones del producto: <FontAwesomeIcon icon={faStar} className={styles.star}/> {product.rating.rate}</p>
              <p>Opiniones de {product.rating.count} clientes</p>
            </div>
          </div>
        </div>
      )}
      <FooterNav />
    </div>
    </>
  )
}

export default Product
