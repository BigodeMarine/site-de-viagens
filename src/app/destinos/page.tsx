import { Suspense } from "react";
import type { Metadata } from "next";
import DestinationExplorer from "@/components/DestinationExplorer";
import styles from "./Destinos.module.css";
export const metadata: Metadata = { title: "Destinos" };
export default function DestinosPage() {
  return (
    <>
      <section className={styles.heading}>
        <div className="wrap">
          <p className="eyebrow">SEU PRÓXIMO CAPÍTULO</p>
          <h1>
            O mundo está cheio
            <br />
            de bons encontros.
          </h1>
          <p>
            Explore lugares, encontre o seu ritmo e comece a imaginar a próxima
            viagem.
          </p>
        </div>
      </section>
      <section className={`wrap ${styles.catalog}`}>
        <Suspense fallback={<p>Carregando destinos…</p>}>
          <DestinationExplorer />
        </Suspense>
      </section>
    </>
  );
}
