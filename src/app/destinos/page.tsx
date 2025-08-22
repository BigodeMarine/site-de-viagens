import CardDestino from '../../components/CardDestino/CardDestino';
import styles from './Destinos.module.css';

export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  slug: string;
  descricao: string;
  atracoes: string[];
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: 'Paris, França',
    imagem: '/images/paris.jpg',
    slug: 'paris',
    descricao: 'Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é atravessada por boulevards largos e pelo rio Sena.',
    atracoes: ['Torre Eiffel', 'Museu do Louvre', 'Catedral de Notre-Dame']
  },
  {
    id: 2,
    nome: 'Tóquio, Japão',
    imagem: '/images/tokyo.jpg',
    slug: 'tokio',
    descricao: 'Tóquio, a movimentada capital do Japão, mistura o ultramoderno e o tradicional, desde arranha-céus iluminados por néon a templos históricos. O Palácio Imperial fica em meio a grandes jardins públicos.',
    atracoes: ['Cruzamento de Shibuya', 'Templo Senso-ji', 'Tokyo Skytree']
  },
  {
    id: 3,
    nome: 'Rio de Janeiro, Brasil',
    imagem: '/images/rio.jpg',
    slug: 'rio-de-janeiro',
    descricao: 'O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar.',
    atracoes: ['Cristo Redentor', 'Pão de Açúcar', 'Praia de Copacabana']
  },
  {
    id: 4,
    nome: 'Sydney, Austrália',
    imagem: '/images/sydney.jpg',
    slug: 'sydney',
    descricao: 'Sydney, capital de Nova Gales do Sul e uma das maiores cidades da Austrália, é mais conhecida por sua Sydney Opera House, com um design em forma de vela. A enorme Darling Harbour e o menor porto Circular Quay são centros de vida à beira-mar.',
    atracoes: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach']
  },
];

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