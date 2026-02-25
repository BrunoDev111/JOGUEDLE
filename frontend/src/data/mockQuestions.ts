import type { Question } from '@/types'

// ============================================
// CARODLE - Mais Caro ou Barato
// ============================================
export const carodleQuestions: Question[] = [
  {
    id: 1,
    gameSlug: 'carodle',
    type: 'compare',
    item1: {
      name: 'iPhone 15 Pro Max',
      emoji: '📱',
      value: 9000,
      displayValue: 'R$ 9.000'
    },
    item2: {
      name: 'PlayStation 5',
      emoji: '🎮',
      value: 4500,
      displayValue: 'R$ 4.500'
    },
    correct: 'item1',
    explanation: 'iPhone 15 Pro Max custa R$ 9.000, enquanto PS5 custa R$ 4.500'
  },
  {
    id: 2,
    gameSlug: 'carodle',
    type: 'compare',
    item1: {
      name: 'Notebook Gamer',
      emoji: '💻',
      value: 7500,
      displayValue: 'R$ 7.500'
    },
    item2: {
      name: 'Smart TV 65"',
      emoji: '📺',
      value: 4000,
      displayValue: 'R$ 4.000'
    },
    correct: 'item1',
    explanation: 'Notebook Gamer custa R$ 7.500, Smart TV 65" custa R$ 4.000'
  },
  {
    id: 3,
    gameSlug: 'carodle',
    type: 'compare',
    item1: {
      name: 'Air Fryer',
      emoji: '🍟',
      value: 500,
      displayValue: 'R$ 500'
    },
    item2: {
      name: 'Microondas',
      emoji: '🔥',
      value: 800,
      displayValue: 'R$ 800'
    },
    correct: 'item2',
    explanation: 'Air Fryer custa R$ 500, Microondas custa R$ 800'
  },
  {
    id: 4,
    gameSlug: 'carodle',
    type: 'compare',
    item1: {
      name: 'Tênis Nike Air',
      emoji: '👟',
      value: 800,
      displayValue: 'R$ 800'
    },
    item2: {
      name: 'Apple Watch',
      emoji: '⌚',
      value: 4000,
      displayValue: 'R$ 4.000'
    },
    correct: 'item2',
    explanation: 'Tênis Nike Air custa R$ 800, Apple Watch custa R$ 4.000'
  },
  {
    id: 5,
    gameSlug: 'carodle',
    type: 'compare',
    item1: {
      name: 'Bicicleta Mountain Bike',
      emoji: '🚴',
      value: 2500,
      displayValue: 'R$ 2.500'
    },
    item2: {
      name: 'Fogão 5 Bocas',
      emoji: '🔥',
      value: 1200,
      displayValue: 'R$ 1.200'
    },
    correct: 'item1',
    explanation: 'Bicicleta custa R$ 2.500, Fogão custa R$ 1.200'
  }
]

// ============================================
// CRONODLE - Timeline
// ============================================
export const cronodleQuestions: Question[] = [
  {
    id: 6,
    gameSlug: 'cronodle',
    type: 'timeline',
    item1: {
      name: 'Lançamento do WhatsApp',
      emoji: '📱',
      value: 2009,
      displayValue: '2009'
    },
    item2: {
      name: 'Lançamento do Instagram',
      emoji: '📸',
      value: 2010,
      displayValue: '2010'
    },
    correct: 'item1',
    explanation: 'WhatsApp foi lançado em 2009, Instagram em 2010'
  },
  {
    id: 7,
    gameSlug: 'cronodle',
    type: 'timeline',
    item1: {
      name: 'Primeiro iPhone',
      emoji: '📱',
      value: 2007,
      displayValue: '2007'
    },
    item2: {
      name: 'Lançamento do Android',
      emoji: '🤖',
      value: 2008,
      displayValue: '2008'
    },
    correct: 'item1',
    explanation: 'iPhone foi lançado em 2007, Android em 2008'
  },
  {
    id: 8,
    gameSlug: 'cronodle',
    type: 'timeline',
    item1: {
      name: 'Netflix começa streaming',
      emoji: '🎬',
      value: 2007,
      displayValue: '2007'
    },
    item2: {
      name: 'YouTube é criado',
      emoji: '▶️',
      value: 2005,
      displayValue: '2005'
    },
    correct: 'item2',
    explanation: 'YouTube foi criado em 2005, Netflix streaming em 2007'
  },
  {
    id: 9,
    gameSlug: 'cronodle',
    type: 'timeline',
    item1: {
      name: 'Facebook é criado',
      emoji: '👥',
      value: 2004,
      displayValue: '2004'
    },
    item2: {
      name: 'Twitter é criado',
      emoji: '🐦',
      value: 2006,
      displayValue: '2006'
    },
    correct: 'item1',
    explanation: 'Facebook foi criado em 2004, Twitter em 2006'
  },
  {
    id: 10,
    gameSlug: 'cronodle',
    type: 'timeline',
    item1: {
      name: 'Google é fundado',
      emoji: '🔍',
      value: 1998,
      displayValue: '1998'
    },
    item2: {
      name: 'Amazon é fundada',
      emoji: '📦',
      value: 1994,
      displayValue: '1994'
    },
    correct: 'item2',
    explanation: 'Amazon foi fundada em 1994, Google em 1998'
  }
]

// ============================================
// NUMERODLE - Maior ou Menor
// ============================================
export const numerodleQuestions: Question[] = [
  {
    id: 11,
    gameSlug: 'numerodle',
    type: 'compare',
    item1: {
      name: 'População de São Paulo',
      emoji: '🏙️',
      value: 12400000,
      displayValue: '12,4 milhões'
    },
    item2: {
      name: 'População do Rio de Janeiro',
      emoji: '🏖️',
      value: 6748000,
      displayValue: '6,7 milhões'
    },
    correct: 'item1',
    explanation: 'São Paulo tem 12,4 milhões, Rio tem 6,7 milhões'
  },
  {
    id: 12,
    gameSlug: 'numerodle',
    type: 'compare',
    item1: {
      name: 'Altura da Torre Eiffel (metros)',
      emoji: '🗼',
      value: 330,
      displayValue: '330m'
    },
    item2: {
      name: 'Altura do Cristo Redentor (metros)',
      emoji: '⛪',
      value: 38,
      displayValue: '38m'
    },
    correct: 'item1',
    explanation: 'Torre Eiffel tem 330m, Cristo tem 38m'
  },
  {
    id: 13,
    gameSlug: 'numerodle',
    type: 'compare',
    item1: {
      name: 'Velocidade do Guepardo (km/h)',
      emoji: '🐆',
      value: 120,
      displayValue: '120 km/h'
    },
    item2: {
      name: 'Velocidade do Usain Bolt (km/h)',
      emoji: '🏃',
      value: 44,
      displayValue: '44 km/h'
    },
    correct: 'item1',
    explanation: 'Guepardo alcança 120 km/h, Bolt 44 km/h'
  },
  {
    id: 14,
    gameSlug: 'numerodle',
    type: 'compare',
    item1: {
      name: 'Países na América do Sul',
      emoji: '🌎',
      value: 12,
      displayValue: '12 países'
    },
    item2: {
      name: 'Estados no Brasil',
      emoji: '🇧🇷',
      value: 27,
      displayValue: '27 estados'
    },
    correct: 'item2',
    explanation: 'América do Sul tem 12 países, Brasil tem 27 estados'
  },
  {
    id: 15,
    gameSlug: 'numerodle',
    type: 'compare',
    item1: {
      name: 'Jogadores em um time de futebol',
      emoji: '⚽',
      value: 11,
      displayValue: '11 jogadores'
    },
    item2: {
      name: 'Jogadores em um time de vôlei',
      emoji: '🏐',
      value: 6,
      displayValue: '6 jogadores'
    },
    correct: 'item1',
    explanation: 'Futebol tem 11 jogadores, vôlei tem 6'
  }
]

// ============================================
// VERDADLE - Real ou Fake
// ============================================
export const verdadleQuestions: Question[] = [
  {
    id: 16,
    gameSlug: 'verdadle',
    type: 'fact',
    statement: 'Os elefantes são os únicos animais que não conseguem pular.',
    correct: true,
    explanation: 'Verdadeiro! Elefantes são os únicos mamíferos que não conseguem pular.'
  },
  {
    id: 17,
    gameSlug: 'verdadle',
    type: 'fact',
    statement: 'O Brasil é o maior produtor de café do mundo.',
    correct: true,
    explanation: 'Verdadeiro! O Brasil é o maior produtor e exportador de café.'
  },
  {
    id: 18,
    gameSlug: 'verdadle',
    type: 'fact',
    statement: 'A Grande Muralha da China pode ser vista do espaço a olho nu.',
    correct: false,
    explanation: 'Falso! É um mito popular. A Grande Muralha não é visível do espaço.'
  },
  {
    id: 19,
    gameSlug: 'verdadle',
    type: 'fact',
    statement: 'O mel nunca estraga e pode durar milhares de anos.',
    correct: true,
    explanation: 'Verdadeiro! Mel foi encontrado em tumbas egípcias ainda comestível.'
  },
  {
    id: 20,
    gameSlug: 'verdadle',
    type: 'fact',
    statement: 'Os humanos usam apenas 10% do cérebro.',
    correct: false,
    explanation: 'Falso! Usamos praticamente todo o cérebro, só não tudo ao mesmo tempo.'
  }
]

// ============================================
// FRASEDLE - Complete a Frase
// ============================================
export const frasedleQuestions: Question[] = [
  {
    id: 21,
    gameSlug: 'frasedle',
    type: 'complete',
    phrase: 'Evidências, evidências, você pede ______',
    options: ['evidências', 'clemência', 'paciência'],
    correct: 0,
    explanation: 'Frase famosa do meme "Evidências"'
  },
  {
    id: 22,
    gameSlug: 'frasedle',
    type: 'complete',
    phrase: 'Que a força esteja ______',
    options: ['contigo', 'com você', 'presente'],
    correct: 1,
    explanation: 'Frase icônica de Star Wars: "May the force be with you"'
  },
  {
    id: 23,
    gameSlug: 'frasedle',
    type: 'complete',
    phrase: 'Quer coisa melhor que pão na chapa e um pingado? ______',
    options: ['Nada', 'Tem não', 'Impossível'],
    correct: 1,
    explanation: 'Frase clássica brasileira de boteco'
  },
  {
    id: 24,
    gameSlug: 'frasedle',
    type: 'complete',
    phrase: 'É o Tchan! É o Tchan! É o ______',
    options: ['som', 'Tchan', 'bom'],
    correct: 1,
    explanation: 'Música do grupo É o Tchan dos anos 90'
  },
  {
    id: 25,
    gameSlug: 'frasedle',
    type: 'complete',
    phrase: 'Até tu, ______?',
    options: ['amigo', 'Brutus', 'César'],
    correct: 1,
    explanation: 'Frase histórica de Júlio César ao ver Brutus entre seus assassinos'
  }
]

// ============================================
// Função Helper para Pegar Questões por Jogo
// ============================================
export const getQuestionsByGame = (gameSlug: string): Question[] => {
  switch (gameSlug) {
    case 'carodle':
      return carodleQuestions
    case 'cronodle':
      return cronodleQuestions
    case 'numerodle':
      return numerodleQuestions
    case 'verdadle':
      return verdadleQuestions
    case 'frasedle':
      return frasedleQuestions
    default:
      return []
  }
}