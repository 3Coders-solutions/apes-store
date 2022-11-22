import type { NextPage } from 'next'
import Head from 'next/head'

import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'
import Banner from '@components/Banner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apes | Inicio</title>
        <meta name="description" content="Tienda de ropa online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNav />
      
      <FooterNav />
    </>
  )
}

export default Home
