import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../../next.js-dynamic-import-in-export/components/test'), { ssr: false, loading: () => <p>Loading...</p>})
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <DynamicComponent />
      </main>
        
    </div>
  )
}
