import CardDestino from '../../components/CardDestino/CardDestino';
import styles from './Destinos.module.css';
import { destinos } from '@/data/destinos';

export default function DestinosPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nossos Destinos</h1>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </div>
  );
}