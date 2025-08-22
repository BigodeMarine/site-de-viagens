import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Portal de Viagens. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;