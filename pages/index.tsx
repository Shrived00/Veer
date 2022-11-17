import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Info from '../components/Info'
import Contact from '../components/Contact'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>VeerCs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Intro />
      <Info />
      <Contact />


    </div>
  )
}

export default Home
