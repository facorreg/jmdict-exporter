const entities = {
  Buddh: 'Buddhist term',
  MA: 'martial arts term',
  Shinto: 'Shinto term',
  X: 'rude or X-rated term (not displayed in educational software)',
  abbr: 'abbreviation',
  'adj-f': 'noun or verb acting prenominally',
  'adj-i': 'adjective (keiyoushi)',
  'adj-ix': 'adjective (keiyoushi) - yoi/ii class',
  'adj-kari': "`kari' adjective (archaic)",
  'adj-ku': "`ku' adjective (archaic)",
  'adj-na': 'adjectival nouns or quasi-adjectives (keiyodoshi)',
  'adj-nari': 'archaic/formal form of na-adjective',
  'adj-no': "nouns which may take the genitive case particle `no'",
  'adj-pn': 'pre-noun adjectival (rentaishi)',
  'adj-shiku': "`shiku' adjective (archaic)",
  'adj-t': "`taru' adjective",
  adv: 'adverb (fukushi)',
  'adv-to': "adverb taking the `to' particle",
  anat: 'anatomical term',
  arch: 'archaism',
  archit: 'architecture term',
  astron: 'astronomy, etc. term',
  ateji: 'ateji (phonetic) reading',
  aux: 'auxiliary',
  'aux-adj': 'auxiliary adjective',
  'aux-v': 'auxiliary verb',
  baseb: 'baseball term',
  biol: 'biology term',
  bot: 'botany term',
  bus: 'business term',
  chem: 'chemistry term',
  chn: "children's language",
  col: 'colloquialism',
  comp: 'computer terminology',
  conj: 'conjunction',
  'cop-da': 'copula',
  ctr: 'counter',
  derog: 'derogatory',
  eK: 'exclusively kanji',
  econ: 'economics term',
  ek: 'exclusively kana',
  engr: 'engineering term',
  exp: 'expressions (phrases, clauses, etc.)',
  fam: 'familiar language',
  fem: 'female term or language',
  finc: 'finance term',
  food: 'food term',
  geol: 'geology, etc. term',
  geom: 'geometry term',
  gikun: 'gikun (meaning as reading) or jukujikun (special kanji reading)',
  hob: 'Hokkaido-ben',
  hon: 'honorific or respectful (sonkeigo) language',
  hum: 'humble (kenjougo) language',
  iK: 'word containing irregular kanji usage',
  id: 'idiomatic expression',
  ik: 'word containing irregular kana usage',
  int: 'interjection (kandoushi)',
  io: 'irregular okurigana usage',
  iv: 'irregular verb',
  joc: 'jocular, humorous term',
  ksb: 'Kansai-ben',
  ktb: 'Kantou-ben',
  kyb: 'Kyoto-ben',
  kyu: 'Kyuushuu-ben',
  law: 'law, etc. term',
  ling: 'linguistics terminology',
  'm-sl': 'manga slang',
  mahj: 'mahjong term',
  male: 'male term or language',
  'male-sl': 'male slang',
  math: 'mathematics',
  med: 'medicine, etc. term',
  mil: 'military',
  music: 'music term',
  n: 'noun (common) (futsuumeishi)',
  'n-adv': 'adverbial noun (fukushitekimeishi)',
  'n-pr': 'proper noun',
  'n-pref': 'noun, used as a prefix',
  'n-suf': 'noun, used as a suffix',
  'n-t': 'noun (temporal) (jisoumeishi)',
  nab: 'Nagano-ben',
  num: 'numeric',
  oK: 'word containing out-dated kanji',
  obs: 'obsolete term',
  obsc: 'obscure term',
  oik: 'old or irregular kana form',
  ok: 'out-dated or obsolete kana usage',
  'on-mim': 'onomatopoeic or mimetic word',
  osb: 'Osaka-ben',
  physics: 'physics terminology',
  pn: 'pronoun',
  poet: 'poetical term',
  pol: 'polite (teineigo) language',
  pref: 'prefix',
  proverb: 'proverb',
  prt: 'particle',
  rare: 'rare',
  rkb: 'Ryuukyuu-ben',
  sens: 'sensitive',
  shogi: 'shogi term',
  sl: 'slang',
  sports: 'sports term',
  suf: 'suffix',
  sumo: 'sumo term',
  thb: 'Touhoku-ben',
  tsb: 'Tosa-ben',
  tsug: 'Tsugaru-ben',
  uK: 'word usually written using kanji alone',
  uk: 'word usually written using kana alone',
  unc: 'unclassified',
  'v-unspec': 'verb unspecified',
  v1: 'Ichidan verb',
  'v1-s': 'Ichidan verb - kureru special class',
  'v2a-s': "Nidan verb with 'u' ending (archaic)",
  'v2b-k': "Nidan verb (upper class) with `bu' ending (archaic)",
  'v2b-s': "Nidan verb (lower class) with `bu' ending (archaic)",
  'v2d-k': "Nidan verb (upper class) with `dzu' ending (archaic)",
  'v2d-s': "Nidan verb (lower class) with `dzu' ending (archaic)",
  'v2g-k': "Nidan verb (upper class) with `gu' ending (archaic)",
  'v2g-s': "Nidan verb (lower class) with `gu' ending (archaic)",
  'v2h-k': "Nidan verb (upper class) with `hu/fu' ending (archaic)",
  'v2h-s': "Nidan verb (lower class) with `hu/fu' ending (archaic)",
  'v2k-k': "Nidan verb (upper class) with `ku' ending (archaic)",
  'v2k-s': "Nidan verb (lower class) with `ku' ending (archaic)",
  'v2m-k': "Nidan verb (upper class) with `mu' ending (archaic)",
  'v2m-s': "Nidan verb (lower class) with `mu' ending (archaic)",
  'v2n-s': "Nidan verb (lower class) with `nu' ending (archaic)",
  'v2r-k': "Nidan verb (upper class) with `ru' ending (archaic)",
  'v2r-s': "Nidan verb (lower class) with `ru' ending (archaic)",
  'v2s-s': "Nidan verb (lower class) with `su' ending (archaic)",
  'v2t-k': "Nidan verb (upper class) with `tsu' ending (archaic)",
  'v2t-s': "Nidan verb (lower class) with `tsu' ending (archaic)",
  'v2w-s': "Nidan verb (lower class) with `u' ending and `we' conjugation (archaic)",
  'v2y-k': "Nidan verb (upper class) with `yu' ending (archaic)",
  'v2y-s': "Nidan verb (lower class) with `yu' ending (archaic)",
  'v2z-s': "Nidan verb (lower class) with `zu' ending (archaic)",
  v4b: "Yodan verb with `bu' ending (archaic)",
  v4g: "Yodan verb with `gu' ending (archaic)",
  v4h: "Yodan verb with `hu/fu' ending (archaic)",
  v4k: "Yodan verb with `ku' ending (archaic)",
  v4m: "Yodan verb with `mu' ending (archaic)",
  v4n: "Yodan verb with `nu' ending (archaic)",
  v4r: "Yodan verb with `ru' ending (archaic)",
  v4s: "Yodan verb with `su' ending (archaic)",
  v4t: "Yodan verb with `tsu' ending (archaic)",
  v5aru: 'Godan verb - -aru special class',
  v5b: "Godan verb with `bu' ending",
  v5g: "Godan verb with `gu' ending",
  v5k: "Godan verb with `ku' ending",
  'v5k-s': 'Godan verb - Iku/Yuku special class',
  v5m: "Godan verb with `mu' ending",
  v5n: "Godan verb with `nu' ending",
  v5r: "Godan verb with `ru' ending",
  'v5r-i': "Godan verb with `ru' ending (irregular verb)",
  v5s: "Godan verb with `su' ending",
  v5t: "Godan verb with `tsu' ending",
  v5u: "Godan verb with `u' ending",
  'v5u-s': "Godan verb with `u' ending (special class)",
  v5uru: 'Godan verb - Uru old class verb (old form of Eru)',
  vi: 'intransitive verb',
  vk: 'Kuru verb - special class',
  vn: 'irregular nu verb',
  vr: 'irregular ru verb, plain form ends with -ri',
  vs: 'noun or participle which takes the aux. verb suru',
  'vs-c': 'su verb - precursor to the modern suru',
  'vs-i': 'suru verb - irregular',
  'vs-s': 'suru verb - special class',
  vt: 'transitive verb',
  vulg: 'vulgar expression or word',
  vz: 'Ichidan verb - zuru verb (alternative form of -jiru verbs)',
  yoji: 'yojijukugo',
  zool: 'zoology term',
};

export default entities;
