import Head from 'next/head'
import Home from './Home'

export default function index() {
  return (
    <div>
      <Head>
        <link rel="icon" type="image" href="img/Logo-WhiteBG.png"></link>
        <title>Kenny Portfolio</title>
      </Head>
      <Home />
    </div>
  )
}
