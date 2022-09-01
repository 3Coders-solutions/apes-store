import { NextPage } from 'next'
import Head from 'next/head'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'

const Contact: NextPage = () => {
  return (
    <>
    <Head>
      <title>Apes | Contacto</title>
    </Head>
    <div>
      <HeaderNav/>
      contacto
      <FooterNav />
    </div>
    </>
  )
}

export default Contact
