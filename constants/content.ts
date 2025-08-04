export const SITE_CONTENT = {
  logo: {
    text: "OBSCURO",
    alt: "Logo Obscuro",
  },
   hero: {
    subtitle: "OBSCURO",
    title: "A ESSÊNCIA",
    cta: "SOLICITE SEU ORÇAMENTO",
  },
  sideText: {
    left: "DA CONCEPÇÃO À OBRA FINAL. SUA VISÃO EM NOSSAS MÃOS.",
    right: "LIBERTE SUA ARTE INTERNA. CRIE SUA OBRA-PRIMA.",
  },
  newSection: {
    subtitle: "NOVOS HORIZONTES DA ARTE",
    title: "TATUAGENS PERSONALIZADAS",
    description:
      "NO ESTÚDIO OBSCURO, CADA TATUAGEM É UMA EXPRESSÃO ÚNICA. VAMOS ALÉM DA TINTA NA PELE, TRANSFORMANDO SUA IDEIA EM UMA ARTE QUE RESSOA COM SUA HISTÓRIA E INDIVIDUALIDADE PROFUNDA.",
    cta: "VEJA NOSSAS ARTES",
  },
  stylesSection: {
    subtitle: "EXPLORE NOSSA GALERIA",
    title: "NOSSOS ARTISTAS",
    styles: [
      { name: "Darken", image: "/images/artista1.jpg" },
      { name: "BloodIsa", image: "/images/artista2.jpg" },
      { name: "Kim", image: "/images/artista1.jpg" },
      { name: "Rafa T", image: "/images/artista2.jpg" },
      { name: "Vinni", image: "/images/artista1.jpg" },
    ],
  },
  gallerySection: {
    title: "PORTFÓLIO",
    description:
      "ORGULHAMO-NOS DO NOSSO ATENDIMENTO METICULOSO, GARANTINDO QUE CADA DETALHE DO SEU SONHO SEJA PERFEITO. DESPERTE SUA ESSÊNCIA ATRAVÉS DA TINTA.",
    cta: "CONHEÇA NOSSOS ARTISTAS",
    images: [
      { src: "/images/12.1.jpg", alt: "Floral Tattoo" },
      { src: "/images/12.1.jpg", alt: "Clockwork Tattoo" },
      { src: "/images/12.1.jpg", alt: "Dragon Tattoo" },
    ],
  },
  footer: {
    ctaBanner: {
      text: "PRONTO PARA DEIXAR SUA MARCA? CRIAMOS HISTÓRIAS NA PELE.",
      button: "COMECE SEU ORÇAMENTO",
    },
    mainTitle: "A LIBERDADE DA ARTE",
    backgroundText: "OBSCURO",
    copyright: "© OBSCURO",
    designer: "MY HEAD IS A VERY DARK PLACE",
    socials: [
      { name: "Instagram", icon: "instagram", href: "#" },
      { name: "WhatsApp", icon: "whatsapp", href: "#" },
      { name: "Facebook", icon: "facebook", href: "#" },

    ],
  },
  images: {
    portraitAlt: "Tattooed man portrait",
    artworkAlt: "Detailed tattoo artwork",
    smallTattooAlt: "Detailed arm tattoo artwork",
    largeTattooAlt: "Detailed back tattoo warrior design",
  },
} as const