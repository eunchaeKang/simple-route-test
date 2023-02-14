import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const test = () => {
        window.location.href="https://www-qa1.stg.kurly.com/popup/partners/loreal/callback?status=success"
    }
    const test2 = () => {
        window.location.href="https://www-qa1.stg.kurly.com/popup/partners/loreal/callback"
    }
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
              외부망 페이지 테스트
          </p>

         <button type="button" onClick={test}>return url 테스트(기존 창 닫힘)</button>
          <button type="button" onClick={test2}>return url 테스트(기존 창 유지)</button>
      </main>
    </>
  )
}
