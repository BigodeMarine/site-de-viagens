import { destinos } from '../page';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import styles from './Detalhe.module.css';

export async function generateStaticParams() {
  return destinos.map((destino) => ({
    slug: destino.slug,
  }));
}

export default async function DestinoDetalhePage({ params }: { params: { slug: string } }) {
  const destino = destinos.find(d => d.slug === params.slug);

  if (!destino) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{destino.nome}</h1>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={`Imagem de ${destino.nome}`}
          fill
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
      <p className={styles.description}>{destino.descricao}</p>
      <h2 className={styles.subtitle}>Principais Atrações</h2>
      <ul className={styles.attractionsList}>
        {destino.atracoes.map((atracao, index) => (
          <li key={index} className={styles.attractionItem}>{atracao}</li>
        ))}
      </ul>
    </div>
  );
}