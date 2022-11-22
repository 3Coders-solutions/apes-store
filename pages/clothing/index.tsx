import { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'
import ShopItemCard from '@components/ShopItemCard'
import Banner from '@components/Banner'

const Clothing: NextPage = () => {
  const [clothes, setClothes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
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
      <title>Apes | Catálogo</title>
    </Head>
    <div>
      <HeaderNav />

      <Banner 
        title="Summer Sale"
        imgSrc="/img/banner-bg1.jpg"
        imgAlt="Logo Image"
      />
      
      {isLoading ? (
        <p>cargando productos...</p>
      ) : (
        <div style={{ display: "flex"}}>
          {clothes.map((item: any) => 
            <ShopItemCard 
            id={item.id}
            name={item.title} 
            description={item.description} 
            imgSrc={item.image} 
            price={item.price}
            key={item.id}
          />
          )}
        </div>
      )}
      {error ? ( <p>{error}</p> ) : null}
      
      <FooterNav />
    </div>
    </>
  )
}

export default Clothing
