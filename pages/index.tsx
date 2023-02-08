import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const test = () => {
        window.location.href="http://www-qa1.stg.kurly.com/popup/partners/loreal/callback?status=success"
    }

    const test2 = () => {
        window.open("http://www-qa4.st1.kurly.com/popup/partners/loreal/callback?status=success")
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
              mybeautybox
              가입이 완료되었습니다.
          </p>

         <button type="button" onClick={test}>버튼 테스트1</button>
          <button type="button" onClick={test2}>버튼 테스트2</button>
          <a href="http://local34.dev.kurly.com/popup/partners/loreal/callback?status=success">
            확인(성공)
          </a>
          <a href="http://local34.dev.kurly.com/popup/partners/loreal/callback?status=success" target="_self">
              확인(성공, _self)
          </a>
          <a href="http://local34.dev.kurly.com/popup/partners/loreal/callback?status=success" target="_blank" rel="noreferrer">
              확인(성공, _black)
          </a>
          <a href="http://local34.dev.kurly.com/popup/partners/loreal/callback?status=success" target="_parent">
              확인(성공, _parent)
          </a>
          <a href="http://local34.dev.kurly.com/popup/partners/loreal/callback?status=success" target="_top">
              확인(성공, _top)
          </a>
          <a href="http://local34.dev.kurly.com/popup/partners/loreal/callback">
            확인(실패)
          </a>
      </main>
    </>
  )
}
