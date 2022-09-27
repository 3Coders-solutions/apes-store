import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderNav from '@components/HeaderNav'
import FooterNav from '@components/FooterNav'

const About: NextPage = () => {
  return (
    <>
    <Head>
      <title>Apes | Nosotros</title>
    </Head>
    <div>
      <HeaderNav />
      About
      <FooterNav />
    </div>
    </>
  )
}

export default About
