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
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
    .then(res => res.json())
    .then(data => {
      setClothes(data)
      setIsLoading(false)
        console.log(clothes)
      })
  }, [clothes])

  return (
    <>
    <Head>
      <title>Apes | Catálogo</title>
    </Head>
    <div>
      <HeaderNav />

      {/* <Banner 
        title="NENE"
        imgSrc="/../public/img/logo.jpg"
        imgAlt="Logo Image"
      /> */}
      
      {isLoading ? (
        <p>cargando productos...</p>
      ) : (
        <div style={{ display: "flex"}}>
          {clothes.map((item: any) => 
            <ShopItemCard 
            name={item.title} 
            description={item.description} 
            imgSrc={item.image} 
            price={item.price}
            key={item.id}
          />
          )}
        </div>
      )}
      
      <FooterNav />
    </div>
    </>
  )
}

export default Clothing
