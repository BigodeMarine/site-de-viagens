"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
export default function Header() {
  const path = usePathname();
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <span>
            portal de viagens
            <span className={styles.tagline}>O MUNDO ESPERA POR VOCÊ</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/" aria-current={path === "/" ? "page" : undefined}>
            Início
          </Link>
          <Link
            href="/destinos"
            aria-current={path.startsWith("/destinos") ? "page" : undefined}
          >
            Destinos
          </Link>
          <Link href="/#experiencias" className={styles.experiences}>
            Experiências
          </Link>
        </nav>
        <Link href="/destinos" className={styles.cta}>
          Explore o mundo
        </Link>
      </div>
    </header>
  );
}
