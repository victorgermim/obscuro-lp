# Tattoo Studio Website

## Estrutura do Projeto

\`\`\`
├── app/
│   ├── page.tsx                 # Página principal
│   └── layout.tsx              # Layout raiz
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Cabeçalho principal
│   │   ├── navigation.tsx      # Componente de navegação
│   │   └── main-layout.tsx     # Layout principal
│   ├── sections/
│   │   └── hero-section.tsx    # Seção hero principal
│   └── ui/
│       ├── logo.tsx            # Componente do logo
│       ├── image-gallery.tsx   # Galeria de imagens
│       ├── hero-title.tsx      # Título principal
│       ├── call-to-action.tsx  # Botão CTA
│       ├── side-text.tsx       # Texto lateral
│       └── decorative-elements.tsx # Elementos decorativos
├── constants/
│   ├── navigation.ts           # Dados de navegação
│   └── content.ts             # Conteúdo do site
├── types/
│   └── navigation.ts          # Tipos TypeScript
├── config/
│   └── theme.ts              # Configurações de tema
└── public/
    └── images/               # Imagens estáticas
\`\`\`

## Componentes

### Layout
- **MainLayout**: Container principal com tema escuro
- **Header**: Cabeçalho com navegação e logo
- **Navigation**: Componente reutilizável de navegação

### UI
- **Logo**: Logo centralizado com ícone
- **ImageGallery**: Grid de imagens principais
- **HeroTitle**: Título sobreposto grande
- **CallToAction**: Botão de agendamento
- **SideText**: Texto rotacionado nas laterais
- **DecorativeElements**: Elementos decorativos (+)

### Sections
- **HeroSection**: Seção principal com título, imagens e CTA

## Configuração

O arquivo `config/theme.ts` contém todas as configurações de cores, espaçamento e tipografia para facilitar customizações futuras.

## Constantes

- `constants/navigation.ts`: Itens de menu
- `constants/content.ts`: Todo o conteúdo textual do site
