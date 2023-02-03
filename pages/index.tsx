import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <p>
              mybeautybox
              가입이 완료되었습니다.
          </p>
          <a href="https://www-qa3.stg.kurly.com/popup/partners/loreal/callback?status=success">
            확인(성공)
          </a>
          <a href="https://www-qa3.stg.kurly.com/popup/partners/loreal/callback">
            확인(실패)
          </a>
      </main>
    </>
  )
}
