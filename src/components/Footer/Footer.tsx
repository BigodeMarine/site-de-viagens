import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.top}`}>
        <div>
          <Link href="/" className={styles.brand}>
            ↗ portal de viagens
          </Link>
          <p>Mais que lugares. Novas histórias para viver.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <Link href="/destinos">Todos os destinos ↗</Link>
          <Link href="/#experiencias">Encontre sua experiência ↗</Link>
        </nav>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Portal de Viagens.</span>
        <span>Feito para quem tem o mundo nos planos.</span>
      </div>
    </footer>
  );
}
