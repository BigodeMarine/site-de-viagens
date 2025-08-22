import Link from 'next/link';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao Portal de Viagens
        </h1>
        <p className={styles.description}>
          Explore os destinos mais incríveis e planeje sua próxima aventura.
        </p>
        <Link href="/destinos" className={styles.link}>
          Ver Destinos
        </Link>
      </main>
    </div>
  );
}