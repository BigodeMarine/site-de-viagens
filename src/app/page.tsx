import Link from "next/link";
import Image from "next/image";
import CardDestino from "@/components/CardDestino/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./Home.module.css";
export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="/images/rio.webp"
          alt="Montanhas e litoral do Rio de Janeiro"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.shade} />
        <div className={`wrap ${styles.heroContent}`}>
          <p className="eyebrow">VÁ ALÉM DO QUE VOCÊ JÁ CONHECE</p>
          <h1>
            O próximo capítulo
            <br />
            da sua história
            <br />
            <em>começa lá fora.</em>
          </h1>
          <p className={styles.intro}>
            Lugares que surpreendem. Experiências que conectam.
            <br />
            Encontre inspiração para a sua próxima viagem.
          </p>
          <Link href="/destinos" className={styles.heroButton}>
            Encontre seu próximo destino <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className={`wrap ${styles.caption}`}>
          <span>22°54′ S · 43°12′ O</span>
          <Link href="/destinos/rio-de-janeiro">Rio de Janeiro, Brasil ↗</Link>
        </div>
      </section>
      <div className={styles.ribbon}>
        <div className={`wrap ${styles.ribbonInner}`}>
          <span>UM MUNDO DE POSSIBILIDADES</span>
          <p>Da sua primeira descoberta à próxima grande aventura.</p>
          <span aria-hidden="true">↓</span>
        </div>
      </div>
      <section className="wrap section">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">ESCOLHA O SEU PRÓXIMO HORIZONTE</p>
            <h2>Lugares que ficam com você.</h2>
          </div>
          <Link href="/destinos" className="textLink">
            Explore todos os destinos ↗
          </Link>
        </div>
        <div className={styles.grid}>
          {[destinos[0], destinos[2], destinos[1]].map((d) => (
            <CardDestino key={d.id} destino={d} />
          ))}
        </div>
      </section>
      <section id="experiencias" className={styles.experiences}>
        <div className="wrap">
          <div className="sectionHeading">
            <div>
              <p className="eyebrow">VIAJE DO SEU JEITO</p>
              <h2>O que move você?</h2>
            </div>
            <p className={styles.sectionIntro}>
              Existe uma viagem para cada momento.
              <br />
              Descubra a experiência que combina com o seu.
            </p>
          </div>
          <div className={styles.experienceGrid}>
            {[
              {
                name: "Natureza",
                n: "01",
                text: "Respire fundo. O melhor cenário está lá fora.",
                icon: "♧",
              },
              {
                name: "Cultura",
                n: "02",
                text: "Novos sabores, histórias e outras formas de ver.",
                icon: "◈",
              },
              {
                name: "Família",
                n: "03",
                text: "Memórias que ficam ainda melhores juntos.",
                icon: "☀",
              },
              {
                name: "Praia",
                n: "04",
                text: "Menos pressa. Mais horizonte e pés na areia.",
                icon: "≈",
              },
            ].map((c) => (
              <Link
                key={c.name}
                href={`/destinos?experiencia=${encodeURIComponent(c.name)}`}
                className={styles.experience}
              >
                <div>
                  <span>{c.n}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {c.icon}
                  </span>
                </div>
                <h3>{c.name}</h3>
                <p>{c.text}</p>
                <span className={styles.expArrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className={styles.story}>
          <div className={styles.storyImage}>
            <Image
              src={destinos[6].imagem}
              alt="Dunas e lagoas dos Lençóis Maranhenses"
              fill
              sizes="(max-width:700px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.storyText}>
            <p className="eyebrow">PARA DESCOBRIR JUNTOS</p>
            <h2>
              As melhores lembranças
              <br />
              não cabem na mala.
            </h2>
            <p>
              Das dunas dos Lençóis Maranhenses às Cataratas do Iguaçu, descubra
              destinos brasileiros que despertam a curiosidade de todas as gerações.
            </p>
            <Link
              href="/destinos?regiao=América%20do%20Sul"
              className="button"
            >
              Descubra os destinos no Brasil <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
