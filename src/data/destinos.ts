export interface Destino {
  id: number;
  categoria: string;
  regiao: string;
  resumo: string;
  credito?: string;
  fonteImagem?: string;
  nome: string;
  imagem: string;
  slug: string;
  descricao: string;
  atracoes: string[];
}

export const destinos: Destino[] = [
  {
    id: 1,
    categoria: "Cultura",
    regiao: "Europa",
    resumo:
      "Arte, cafés e passeios que transformam cada esquina em uma descoberta.",
    nome: "Paris, França",
    imagem: "/images/paris.webp",
    slug: "paris",
    descricao:
      "Paris, a capital da França, é uma importante cidade europeia e um centro mundial de arte, moda, gastronomia e cultura. Sua paisagem urbana do século XIX é atravessada por boulevards largos e pelo rio Sena.",
    atracoes: ["Torre Eiffel", "Museu do Louvre", "Catedral de Notre-Dame"],
  },
  {
    id: 2,
    categoria: "Cultura",
    regiao: "Ásia",
    resumo:
      "Templos tranquilos e a energia de uma cidade que olha para o futuro.",
    nome: "Tóquio, Japão",
    imagem: "/images/tokyo.webp",
    slug: "tokio",
    descricao:
      "Tóquio, a movimentada capital do Japão, mistura o ultramoderno e o tradicional, desde arranha-céus iluminados por néon a templos históricos. O Palácio Imperial fica em meio a grandes jardins públicos.",
    atracoes: ["Cruzamento de Shibuya", "Templo Senso-ji", "Tokyo Skytree"],
  },
  {
    id: 3,
    categoria: "Natureza",
    regiao: "América do Sul",
    resumo: "Entre o mar e a montanha, viva a cidade no seu próprio ritmo.",
    nome: "Rio de Janeiro, Brasil",
    imagem: "/images/rio.webp",
    slug: "rio-de-janeiro",
    credito: "Acervo do projeto projeto-rio",
    fonteImagem: "https://github.com/lucasxcampos/projeto-rio",
    descricao:
      "O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar.",
    atracoes: ["Cristo Redentor", "Pão de Açúcar", "Praia de Copacabana"],
  },
  {
    id: 4,
    categoria: "Praia",
    regiao: "Oceania",
    resumo:
      "Praias, arquitetura e dias leves à beira de um porto inesquecível.",
    nome: "Sydney, Austrália",
    imagem: "/images/sydney.webp",
    slug: "sydney",
    descricao:
      "Sydney, capital de Nova Gales do Sul e uma das maiores cidades da Austrália, é mais conhecida por sua Sydney Opera House, com um design em forma de vela. A enorme Darling Harbour e o menor porto Circular Quay são centros de vida à beira-mar.",
    atracoes: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"],
  },
  {
    id: 5,
    nome: "Foz do Iguaçu, Brasil",
    slug: "foz-do-iguacu",
    credito: "Acervo do projeto portal-turistico",
    fonteImagem: "https://github.com/Gui64math64/portal-turistico",
    categoria: "Família",
    regiao: "América do Sul",
    imagem: "/images/foz-do-iguacu.webp",
    resumo: "Cataratas, aves e descobertas para compartilhar em família.",
    descricao:
      "Na fronteira entre Brasil, Argentina e Paraguai, Foz do Iguaçu combina paisagens naturais com encontros culturais. As passarelas das Cataratas, o Parque das Aves e o Marco das Três Fronteiras convidam a explorar a região juntos.",
    atracoes: [
      "Cataratas do Iguaçu",
      "Parque das Aves",
      "Marco das Três Fronteiras",
    ],
  },
  {
    id: 6,
    nome: "Fernando de Noronha, Brasil",
    slug: "fernando-de-noronha",
    credito: "Acervo do projeto portal-turistico",
    fonteImagem: "https://github.com/Gui64math64/portal-turistico",
    categoria: "Praia",
    regiao: "América do Sul",
    imagem: "/images/fernando-de-noronha.webp",
    resumo: "Águas transparentes e vida marinha no horizonte de Pernambuco.",
    descricao:
      "Fernando de Noronha reúne praias, mirantes e paisagens protegidas no Atlântico. Conheça a Baía do Sancho, contemple o Morro Dois Irmãos e descubra a história da Vila dos Remédios, respeitando as regras de visitação e conservação do arquipélago.",
    atracoes: [
      "Baía do Sancho",
      "Mirante do Morro Dois Irmãos",
      "Vila dos Remédios",
    ],
  },
  {
    id: 7,
    nome: "Lençóis Maranhenses, Brasil",
    slug: "lencois-maranhenses",
    credito: "Acervo do projeto local-turistico-lencois-maranhenses",
    fonteImagem:
      "https://github.com/LuisAndree/local-turistico-lencois-maranhenses",
    categoria: "Natureza",
    regiao: "América do Sul",
    imagem: "/images/lencois-maranhenses.webp",
    resumo: "Dunas brancas e lagoas que revelam um Brasil surpreendente.",
    descricao:
      "No Maranhão, dunas de areia branca e lagoas formadas pelas chuvas criam uma paisagem em constante transformação. Barreirinhas, Santo Amaro e Atins são pontos de partida para conhecer os Lençóis Maranhenses. As condições das lagoas variam ao longo do ano; planeje os passeios com os condutores e consulte as orientações do parque.",
    atracoes: ["Circuito da Lagoa Bonita", "Lagoas de Santo Amaro", "Atins"],
  },
  {
    id: 8,
    nome: "Salvador, Brasil",
    slug: "salvador",
    credito: "Acervo do projeto portal-turistico",
    fonteImagem: "https://github.com/Gui64math64/portal-turistico",
    categoria: "Cultura",
    regiao: "América do Sul",
    imagem: "/images/salvador.webp",
    resumo: "História, sabores e cultura afro-brasileira à beira da Bahia.",
    descricao:
      "Salvador convida a caminhar pelo Pelourinho, descobrir a herança afro-brasileira e experimentar a culinária baiana. Entre o Centro Histórico e a orla da Barra, arquitetura, música e paisagens do mar fazem parte da experiência.",
    atracoes: ["Pelourinho", "Farol da Barra", "Elevador Lacerda"],
  },
];
