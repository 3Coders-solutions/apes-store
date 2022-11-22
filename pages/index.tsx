import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import styles from '@styles/Index.module.css'
import Head from 'next/head'
import Banner from '@components/Banner'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'
import ShopItemCard from '@components/ShopItemCard'


const Home: NextPage = () => {
  const [clothes, setClothes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=19')
      .then(res => res.json())
      .then(data => {
        setClothes(data)
        setIsLoading(false)
        console.log(clothes)
      })
      .catch(error => {
        setError(error.message)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Apes | Inicio</title>
        <meta name="description" content="Tienda de ropa online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderNav />
      <Banner 
        title="Summer Sale"
        imgSrc="/img/banner-bg1.jpg"
        imgAlt="Logo Image"
      />
      
      {isLoading ? (
        <p>cargando productos...</p>
      ) : (
        <div className={styles.itemsContainer}>
          {clothes.map((item: any) => {
            if (item.category == 'jewelery' || item.category.includes('clothing')) {
              return (
              <ShopItemCard 
                id={item.id}
                name={item.title} 
                description={item.description} 
                imgSrc={item.image} 
                price={item.price}
                key={item.id}
              />
             )
            }
          }
          )}
        </div>
      )}
      {error ? ( <p>{error}</p> ) : null}
      <FooterNav />
    </>
  )
}

export default Home
