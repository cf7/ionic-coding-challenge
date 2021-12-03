
import Head from 'next/head'
import Feature from './components/Feature.js';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Feature />
      </main>
    </div>
  );
}