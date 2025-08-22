import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Portal de Viagens
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={styles.navLink}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/destinos" className={styles.navLink}>
                Destinos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;