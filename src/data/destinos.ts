export interface Destino {
  id: number;
  categoria: string;
  regiao: string;
  resumo: string;
  credito?: string;
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
    nome: "Orlando, EUA",
    slug: "orlando",
    credito: "Visit the USA",
    categoria: "Família",
    regiao: "América do Norte",
    imagem:
      "https://www.visittheusa.com/wp-content/uploads/2025/06/BeautifulDestinations_UnitedStories_PartnerPrograms_Disney_ImageSelect12.png",
    resumo: "Parques temáticos e descobertas para compartilhar em família.",
    descricao:
      "Orlando combina parques temáticos com lagos, jardins e experiências ao ar livre na Flórida. Intercale os dias de atrações com passeios mais tranquilos para aproveitar a viagem em família.",
    atracoes: [
      "Walt Disney World Resort",
      "Universal Orlando Resort",
      "Lake Eola Park",
    ],
  },
  {
    id: 6,
    nome: "Monterey, EUA",
    slug: "monterey",
    credito: "SeeMonterey.com / Visit the USA",
    categoria: "Praia",
    regiao: "América do Norte",
    imagem:
      "https://www.visittheusa.com/wp-content/uploads/2025/06/CA_See-Monterey_1024_MBA_SeeMonterey_Web72DPI.png",
    resumo: "Vida marinha e paisagens para desacelerar na costa da Califórnia.",
    descricao:
      "Na costa central da Califórnia, Monterey convida a explorar a vida marinha, caminhar à beira do Pacífico e conhecer a histórica Cannery Row.",
    atracoes: [
      "Monterey Bay Aquarium",
      "Cannery Row",
      "Monterey Bay Coastal Recreation Trail",
    ],
  },
  {
    id: 7,
    nome: "Moab, EUA",
    slug: "moab",
    credito: "Adam Clark / Visit the USA",
    categoria: "Natureza",
    regiao: "América do Norte",
    imagem:
      "https://www.visittheusa.com/wp-content/uploads/2025/06/UT_UTOT_1024_Arches_In-Love-In-Utah_Clark-Adam_2022_Utah_Fall_2022_AdamClark_0680_25January2023.png",
    resumo:
      "Estradas panorâmicas e aventuras entre as rochas vermelhas de Utah.",
    descricao:
      "Moab é uma base para conhecer as paisagens de arenito de Utah. Trilhas e estradas panorâmicas revelam arcos naturais, cânions e a imensidão do deserto.",
    atracoes: [
      "Arches National Park",
      "Canyonlands National Park",
      "Dead Horse Point State Park",
    ],
  },
  {
    id: 8,
    nome: "Washington, D.C., EUA",
    slug: "washington-dc",
    credito: "Visit the USA",
    categoria: "Cultura",
    regiao: "América do Norte",
    imagem:
      "https://www.visittheusa.com/wp-content/uploads/2025/06/FY24_Washington-DC_Lincoln-Memorial__A6A8503_CC_JPG.png",
    resumo: "Museus, monumentos e histórias que aproximam gerações.",
    descricao:
      "A capital dos Estados Unidos reúne monumentos, jardins e museus que convidam a descobrir história, ciência e cultura. Reserve tempo para explorar o National Mall a pé.",
    atracoes: [
      "Lincoln Memorial",
      "National Mall",
      "National Air and Space Museum",
    ],
  },
];
