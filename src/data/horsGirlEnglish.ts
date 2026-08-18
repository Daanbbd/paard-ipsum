import type { Niveau } from '../generator/types';

// The English "Hors Ipsum" voice: over-enthusiastic, badly-typed, extremely online
// horse girl internet speak, as if texted from a flip phone at the barn.

const fragmentenNormaal: string[] = [
  'omg my horsey is literally the cutest thing ever!!!',
  "hes soooo fluffy today hehe",
  'cant believe the farrier is coming tmrw again',
  'ilysm bestie fr fr',
  'he did the cutest lil nicker at me just now :)',
  'ugh dressage is so boring compared to jumping ngl',
  'brushed him for like 2 hours today no regrets',
  'he stole my hay net again lolz',
  'where did my crop even go??',
  'one more lap i promise',
  'vet is coming tmrw i think???',
  'he was sooo fresh today omg',
  "shes finally starting to relax a bit hehe",
  'my bestie has a pony too and shes literally so cute',
  'gave him treats and now hes obsessed w me',
  'he got tangled in his mane again lol',
  'cant decide if i love dressage or jumping more tbh',
  "he's getting a lil chunky from all that grass hehe",
  'riding again tmrw w my bestie cant wait xx',
  'he pinned his ears at literally nothing lol',
  'just hung out at the barn for like 3 hrs today',
  'he has the prettiest eyes ever no cap',
  'brand new saddle pad and its sooo pretty',
  "we're going to a show sat w both of them",
  'treats are literally his whole personality',
  'he did something weird at the trailer again ugh',
  "my bestie says hes getting fat but idc",
  'kisses xoxo',
  'he smells like hay and i love it sm',
  'he got braids in his mane today hehe',
  'zoned out mid ride thinking abt him again lol',
  'he whinnied at me from across the field awhh',
];

const fragmentenGevorderd: string[] = [
  'OMG he literally nailed it today!!!',
  'my bestie said hes the best in the whole barn',
  'hehe he looked at me sooo sweetly awwww',
  "everyone's lowkey jealous of my new saddle pad xD",
  'he jumped a whole rail today wtvrrr!!',
  'hes literally the best fr fr',
  'took like a million pics at the barn lolz',
  'he nickered at me and i was like IM CRYING',
  "so proud he's cantering with no issues now",
  'my bestie is sooo jealous rn hehe no cap',
  'early morning feeding again zzz',
  'he literally ate my hair while i hugged him LOLLL',
  'show next weekend so nervous ahhh',
  "hes literally so perfect i cant even",
  'his mane was a mess but still cute',
];

const fragmentenVolledig: string[] = [
  'hay',
  'randomly thought about fries mid ride lol',
  'HES SO CUTE I CANT EVEN XXXXX',
  "my bestie just texted me something random abt her rabbit but ok",
  'he farted during dressage and everyone died laughing hahaha',
  'sry this text makes no sense i forgot what i was even saying',
  'he looked at me and i was like ok this is love',
  'why do horses smell so good someone needs to study this',
  "my phone is glitching so this might send twice sry xxx",
  "hes literally my whole life and i mean that",
  'PS i love my bestie too but less than my horsey hehe',
  'forgot to say we WON yesterday!!! 1st place!!!',
  "he smells like hay and i smell like shampoo so that didnt match",
  "everyone says i talk about my horse too much and thats just true",
  'kisses xoxo see u at the barn tmrw',
];

const connectors: string[] = [
  ' and ',
  ' bc ',
  ', ',
  ' also ',
  ' oh and ',
  ' btw ',
  ' fr ',
  ' anyway ',
];

const flourishesPerNiveau: Record<Niveau, string[]> = {
  normaal: ['!!!', '!!', '??', '...', 'xx', ':)', ':P', 'hehe'],
  gevorderd: ['!!!', '!!', '??', '?!', 'xD', 'xoxo', ':P', ':D', '<3', 'hehe', 'lol', 'lolz'],
  'volledig-paard': [
    '!!!!',
    '?!?!',
    'XXXXX',
    'xoxo',
    ':P',
    ':D',
    '<3<3',
    'hahahaha',
    'LOL',
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
