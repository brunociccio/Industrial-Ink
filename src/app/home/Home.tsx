// src/app/home/Home.tsx

import Head from 'next/head';
import Header from '../../components/Header';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Industrial Ink - Home</title>
        <meta name="description" content="Welcome to Industrial Ink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>Welcome to Industrial Ink!</h1>
        <p>Get started by editing <code>src/app/home/Home.tsx</code></p>
      </main>
    </div>
  );
}

export default Home;
