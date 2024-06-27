// src/app/home/Home.tsx

import { Metadata } from 'next';
import Header from '../../components/Header';
import BackgroundImage from '../../components/BackgroundImage';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Industrial Ink - Home',
  description: 'Welcome to Industrial Ink',
};

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <BackgroundImage />
    </div>
  );
}

export default Home;


