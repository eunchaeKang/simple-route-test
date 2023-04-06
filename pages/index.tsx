import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const {push} = useRouter();

    const test = () => {
        window.location.href="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain"
    }

    const test2 = () => {
        window.open("https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain", '_blank', 'noopener,noreferrer');
    }

    const test3 = () => {
        window.location.reload();
    }

    const test4 = () => {
        window.location.assign("https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain");
    }

    const test5 = () => {
        window.location.replace("https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain");
    }

    const test6 = () => {
        push("https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain");
    }

    const test7 = () => {
        return {
            redirect: {
                destination: 'https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain',
                permanent: false,
            },
        };
    }


    const test8 = () => {
        push("kurly://");
    }
    const test9 = () => {
        window.open("kurly://");
    }
    const test10 = () => {
        window.location.href="kurly://"
    }
    const test11 = () => {
        return {
            redirect: {
                destination: 'kurly://',
                permanent: false,
            },
        };
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
          <p>외부망 링크처리 테스트</p>

          <a href="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain" target="_blank" rel="noreferrer">a _blank</a>
          <a href="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain" target="_parent">a _parent</a>
          <a href="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain" target="_self">a _self</a>
          <a href="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain" target="_top">a _top</a>
          <a href="https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb?m=authMobileMain">a</a>
         <button type="button" onClick={test}>window.location.href</button>
          <button type="button" onClick={test2}>window.open</button>
          <button type="button" onClick={test3}>window.location.reload</button>
          <button type="button" onClick={test4}>window.location.assign</button>
          <button type="button" onClick={test5}>window.location.replace</button>
          <button type="button" onClick={test6}>route.push</button>
          <button type="button" onClick={test7}>redirect</button>


          <button type="button" onClick={test8}>효진님 여기예요 push</button>
          <button type="button" onClick={test9}>효진님 여기예요 window.open</button>
          <button type="button" onClick={test10}>효진님 여기예요 window.location.href</button>
          <a href="kurly://">효진님 여기예요 a</a>
          <button type="button" onClick={test11}>효진님 여기예요 redirect</button>
          이게맞나,,,,,,,,,,
      </main>
    </>
  )
}
