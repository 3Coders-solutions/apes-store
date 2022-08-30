import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderNav from '@components/HeaderNav'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apes | Nosotros</title>
      </Head>
      <div>
        <HeaderNav />
        About
      </div>
    </>
  )
}

export default About
