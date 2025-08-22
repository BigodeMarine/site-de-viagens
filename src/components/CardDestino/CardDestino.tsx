import Image from 'next/image';
import Link from 'next/link';
import styles from './CardDestino.module.css';
import { Destino } from '@/app/destinos/page';

interface CardDestinoProps {
  destino: Destino;
}

const CardDestino: React.FC<CardDestinoProps> = ({ destino }) => {
  return (
    <Link href={`/destinos/${destino.slug}`} className={styles.linkWrapper}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image
            src={destino.imagem}
            alt={`Imagem de ${destino.nome}`}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.nome}>{destino.nome}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CardDestino;