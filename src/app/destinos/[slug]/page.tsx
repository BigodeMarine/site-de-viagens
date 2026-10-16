import { destinos } from "@/data/destinos";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CardDestino from "@/components/CardDestino/CardDestino";
import styles from "./Detalhe.module.css";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return destinos.map((d) => ({ slug: d.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = destinos.find((d) => d.slug === slug);
  return { title: d?.nome || "Destino não encontrado", description: d?.resumo };
}
export default async function DestinoDetalhePage({ params }: Props) {
  const { slug } = await params;
  const d = destinos.find((d) => d.slug === slug);
  if (!d) notFound();
  return (
    <>
      <div className={`wrap ${styles.breadcrumb}`}>
        <Link href="/">Início</Link>
        <span>/</span>
        <Link href="/destinos">Destinos</Link>
        <span>/</span>
        <span>{d.nome}</span>
      </div>
      <section className={styles.hero}>
        <Image
          src={d.imagem}
          alt={d.nome}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay} />
        <div className={`wrap ${styles.title}`}>
          <p className="eyebrow">
            {d.regiao} · {d.categoria}
          </p>
          <h1>{d.nome}</h1>
          <p>{d.resumo}</p>
        </div>
      </section>
      <section className={`wrap section ${styles.detail}`}>
        <div>
          <p className="eyebrow">CONHEÇA O DESTINO</p>
          <h2>Um lugar. Muitas descobertas.</h2>
          {d.credito && (
            <p className={styles.credit}>
              Foto: {d.credito}.{" "}
              <a href={d.fonteImagem} target="_blank" rel="noreferrer">
                Fonte da imagem
              </a>
            </p>
          )}
          <p className={styles.description}>{d.descricao}</p>
          <h2 className={styles.subtitle}>Para colocar no seu roteiro</h2>
          <ol className={styles.attractions}>
            {d.atracoes.map((a, i) => (
              <li key={a}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{a}</h3>
              </li>
            ))}
          </ol>
        </div>
        <aside className={styles.aside}>
          <p className="eyebrow">ANTES DE PARTIR</p>
          <h2>A boa viagem começa com um plano.</h2>
          <p>
            Confira horários, ingressos e condições de visita diretamente nos
            canais oficiais das atrações.
          </p>
          <p>Deixe espaço no roteiro para as descobertas pelo caminho.</p>
          <Link href="/destinos" className="button">
            Explore outros destinos
          </Link>
        </aside>
      </section>
      <section className={`wrap ${styles.related}`}>
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">CONTINUE EXPLORANDO</p>
            <h2>Seu próximo horizonte.</h2>
          </div>
        </div>
        <div className={styles.grid}>
          {destinos
            .filter((item) => item.id !== d.id)
            .slice(0, 3)
            .map((item) => (
              <CardDestino key={item.id} destino={item} />
            ))}
        </div>
      </section>
    </>
  );
}
