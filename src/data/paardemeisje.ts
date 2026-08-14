import type { Niveau } from '../generator/types';

// De complete "Paardemeisje"-stem: overdreven, fout gespelde, licht ordinair-Breezerachtige
// paardenwereldtaal, alsof getypt op MSN, Hyves of een oude Nokia.

const fragmentenNormaal: string[] = [
  'hooft mooi paart',
  'gaaf mej mij vriendinnuh',
  'egt super mooi beestjuhh',
  'ga morgen weer rije met me schatjuh xxx',
  'hoop dat ie nie weer zo raar doet in de bak hahaha :P',
  'mijn paartjuh is egt de mooiste van de stal!!!',
  'niemand kan hieraan tippen hoorrr',
  'me vriendinnuh zegge dat ie dik is maar ik vind van niej',
  'hij heeft gewoon lekker veel haar op ze hooft hihi',
  'kusjesss xXx',
  'vandaag weer egt lekker gepoetst met me paardjuh',
  'me schatjuh had weer eens geen zin in de bak',
  'gister was ik heel de dag in de stal hihi',
  'me zadeltjuh is helemaal nieuw en egt zo mooi',
  'ik vind dressuur stiekem stommer dan springen',
  'me instructeur zei dat ik egt goei zit vandaag',
  'morgen weer naar de manege met me vriendinnuh',
  'me knollie was weer zo eigenwijs vandaag lolll',
  'hij rook egt naar hooi en dat vind ik zo lekker',
  'me paart had weer vlechtjes in de manen gekregen',
  'vind je ze staart niet egt mooi lang worden',
  'we gaan zaterdag naar een wedstrijdjuh met ze alletwee',
  'brokjes op zijn egt zijn lievelingsding',
  'hij deed weer zo raar bij de trailer pffff',
  'me vriendinnuh heeft ook een pony en die is ook egt schattig',
  'vandaag hooi gegeven en toen lekker geknuffeld',
  'hij is een beetje dikkig geworden van al dat gras hihi',
  'me paardjuh vind rijden stiekem egt niet zo leuk',
  'ik hou zoveel van me beestjuh you have no idea',
  'hij stond weer voor de stal te hinniken naar mij',
  'ging net even langs de stal en toen was ie meteen blij',
  'we hebben een nieuwe deken gekocht want de oude was kapot',
  'me paart heeft de mooiste ogen ooit egt waar',
  'vandaag weer 2 uur in de stal gehangen met me vriendinnuh',
  'zullen we morgen weer naar de bak gaan denk je',
];

const fragmentenGevorderd: string[] = [
  'OMG hij deed het gewoon egt perfect vandaag!!!',
  'me vriendinnuh zei dat me paart egt de beste van de wei is',
  'hihi hij keek me weer zo lief aan awhhh',
  "iedereen was egt jaloers op me nieuwe zadeltjuh xD",
  'hij sprong vandaag zomaar over een balkkk!!',
  'me schatjuh is egt de max sowieso',
  "gewoon even snel wat foto's gemaakt in de bak lolz",
  'hij hinnikte naar me en ik dacht IK GA HUILEN',
  'vet gaaf dat ie nu ook al galoppeert zonder problemen',
  'me vriendinnuh is egt jaloers denk ik hihi sorry not sorry',
  'morgen weer vroeg op voor het voeren zzzz',
  'hij at gewoon me haar op toen ik hem knuffelde LOLLL',
  'we gaan volgend weekend naar een concoursjuh spannenddd',
  'hij is egt zon schatje ik kan niet meer',
  'zijn manen zaten helemaal in de knoop maar toch mooi',
];

const fragmentenVolledig: string[] = [
  'frikadel',
  'ineens moest ik aan patat denken terwijl ik aan het rijden was',
  'HIJ IS ZO MOOI IK KAN NIET MEER XXXXX',
  'me vriendinnuh appte net iets random over haar konijn maar oke',
  'hij deed een scheet tijdens de dressuur en toen moest iedereen lachen hahahaha',
  'sorry voor dit bericht ik weet niet meer wat ik aan het typen was',
  'hij keek me aan en toen dacht ik van oke dit is liefde',
  'waarom rieken paarden altijd zo lekker legit iemand moet dit uitzoeken',
  'me telefoon doet raar dus dit bericht is denk ik dubbel sorry xxx',
  'hij is letterlijk mijn hele leven en dat meen ik heus',
  'PS ik hou ook van me vriendinnuh maar minder dan van me paart hihi',
  'vergat helemaal te zeggen dat we wonnen gisteren!!! 1e plek!!!',
  'hij rook naar hooi en ik naar shampoo dus dat matchte niet zo',
  'iedereen zegt dat ik teveel over me paart praat en dat is gewoon waar',
  'kusjesss xXx en tot morgen weer in de stal',
];

const connectors: string[] = [
  ' en ',
  ' want ',
  ', ',
  ' trouwens ',
  ' oh en ',
  ' btw ',
  ' echt waar ',
  ' maarja ',
];

const flourishesPerNiveau: Record<Niveau, string[]> = {
  normaal: ['!!!', '!!', '??', '...', 'xxx', ':)', ':P', 'hihi'],
  gevorderd: ['!!!', '!!', '??', '?!', 'xXx', 'xxx', ':P', ':D', '<3', 'hihi', 'haha', 'lolz'],
  'volledig-paard': [
    '!!!!',
    '?!?!',
    'XXXXX',
    'xXx',
    ':P',
    ':D',
    '<3<3',
    'hahahaha',
    'HIHI',
    'lolll',
    'zzzz',
  ],
};

export function fragmentenVoorNiveau(niveau: Niveau): string[] {
  if (niveau === 'normaal') return fragmentenNormaal;
  if (niveau === 'gevorderd') return [...fragmentenNormaal, ...fragmentenGevorderd];
  return [...fragmentenNormaal, ...fragmentenGevorderd, ...fragmentenVolledig];
}

export function flourishesVoorNiveau(niveau: Niveau): string[] {
  return flourishesPerNiveau[niveau];
}

export function willekeurigeConnector(): string {
  return connectors[Math.floor(Math.random() * connectors.length)];
}
