import Image from "next/image";
import Link from "next/link";
import styles from "./CardDestino.module.css";
import { Destino } from "@/data/destinos";
export default function CardDestino({ destino }: { destino: Destino }) {
  return (
    <Link href={`/destinos/${destino.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          fill
          sizes="(max-width:650px) 100vw, (max-width:1000px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        <span className={styles.badge}>{destino.categoria}</span>
        <span className={styles.arrow} aria-hidden="true">
          ↗
        </span>
      </div>
      <div className={styles.content}>
        <p className="eyebrow">{destino.regiao}</p>
        <h3>{destino.nome}</h3>
        <p className={styles.summary}>{destino.resumo}</p>
        <span className={styles.more}>
          Descubra o destino <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
