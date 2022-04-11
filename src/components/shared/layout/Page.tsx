import Head from 'next/head';
import { FC } from 'react';
import styles from './page.module.css';

interface PageProps {
  title: string;
  description: string;
}

const Page: FC<PageProps> = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
    <div className={styles.page}>
      <div className={styles.container}>{children}</div>
    </div>
  </>
);

export default Page;
