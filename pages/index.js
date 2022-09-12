import Head from 'next/head'
import Home from './Home'


export default function index() {
  return (
    <div>
      <Head>
        <title>Kenny portfolio</title>
      </Head>
      <Home />
    </div>
  )
}
