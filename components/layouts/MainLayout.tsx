import { Navbar } from "../Navbar"
import Head from 'next/head'
import styles from './MainLayout.module.css'

interface Props {
    children: any;
    }

export const MainLayout = ({ children }: Props) => {

  return (

    <>
    
    <Head>
      <title>Home - Joaquin</title>
      <meta name="description" content="Home Page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <main className={styles.main}>
      
      { children }

    </main>

    
  </>

  )
}
