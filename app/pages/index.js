import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/pages/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KBSB Dashboard</title>
        <meta name="description" content="A data dashboard created with React, Django and ApexCharts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Image
            className={styles.logo}
            src="/kaboom_shebang_logo.svg"
            alt="Kaboom Shebang Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  )
}
