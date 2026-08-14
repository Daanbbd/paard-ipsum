import { flourishesVoorNiveau, fragmentenVoorNiveau, willekeurigeConnector } from '../data/paardemeisje';
import type { GenerateOptions, GenerateResult, Niveau } from './types';

function kies<T>(lijst: T[]): T {
  return lijst[Math.floor(Math.random() * lijst.length)];
}

const RECENTE_GESCHIEDENIS = 4;

// Onthoudt de laatst gebruikte losse fragmenten (niet alleen de vorige samengestelde zin),
// zodat hetzelfde fragment niet een paar zinnen later alweer opduikt.
function maakFragmentKiezer() {
  const geschiedenis: string[] = [];
  return function kiesFragment(pool: string[]): string {
    const kandidaten = pool.filter((fragment) => !geschiedenis.includes(fragment));
    const gekozen = kies(kandidaten.length > 0 ? kandidaten : pool);
    geschiedenis.push(gekozen);
    if (geschiedenis.length > RECENTE_GESCHIEDENIS) geschiedenis.shift();
    return gekozen;
  };
}

// Rekt de laatste letter van een woord op, voor dat overdreven MSN-gevoel ("zooo", "hoorrr").
function rekOp(woord: string): string {
  const laatste = woord.charAt(woord.length - 1);
  if (!/[a-z]/i.test(laatste)) return woord;
  return woord + laatste.repeat(Math.random() < 0.5 ? 1 : 2);
}

const CAPS_KANS: Record<Niveau, number> = { normaal: 0.1, gevorderd: 0.2, 'volledig-paard': 0.35 };
const REK_KANS: Record<Niveau, number> = { normaal: 0.18, gevorderd: 0.3, 'volledig-paard': 0.45 };
const FLOURISH_KANS: Record<Niveau, number> = { normaal: 0.35, gevorderd: 0.55, 'volledig-paard': 0.75 };
const PLAK_KANS: Record<Niveau, number> = { normaal: 0.15, gevorderd: 0.28, 'volledig-paard': 0.4 };

// Voegt willekeurige chaos toe: CAPS LOCK-woord, opgerekte laatste letter, en/of een flourish.
function verbasterZin(zin: string, niveau: Niveau): string {
  const woorden = zin.split(' ');

  if (woorden.length > 1 && Math.random() < CAPS_KANS[niveau]) {
    const index = Math.floor(Math.random() * woorden.length);
    woorden[index] = woorden[index].toUpperCase();
  }

  if (Math.random() < REK_KANS[niveau]) {
    const laatsteIndex = woorden.length - 1;
    woorden[laatsteIndex] = rekOp(woorden[laatsteIndex]);
  }

  let resultaat = woorden.join(' ');

  if (Math.random() < FLOURISH_KANS[niveau]) {
    resultaat += ` ${kies(flourishesVoorNiveau(niveau))}`;
  }

  return resultaat;
}

function maakZin(niveau: Niveau, kiesFragment: (pool: string[]) => string): string {
  const pool = fragmentenVoorNiveau(niveau);
  let basis = kiesFragment(pool);

  if (Math.random() < PLAK_KANS[niveau]) {
    basis = `${basis}${willekeurigeConnector()}${kiesFragment(pool)}`;
  }

  return verbasterZin(basis, niveau);
}

function telWoorden(tekst: string): number {
  return tekst.trim().split(/\s+/).filter(Boolean).length;
}

export function genereer(options: GenerateOptions): GenerateResult {
  const { eenheid, aantal, niveau } = options;
  const n = Math.max(1, Math.floor(aantal) || 1);
  const kiesFragment = maakFragmentKiezer();

  if (eenheid === 'zinnen') {
    const zinnen = Array.from({ length: n }, () => maakZin(niveau, kiesFragment));
    const tekst = zinnen.join(' ');
    return { tekst, woordenAantal: telWoorden(tekst), zinnenAantal: zinnen.length, paragrafenAantal: 1 };
  }

  if (eenheid === 'paragrafen') {
    const paragrafen: string[] = [];
    let zinnenTotaal = 0;
    for (let p = 0; p < n; p++) {
      const aantalZinnen = 3 + Math.floor(Math.random() * 4); // 3 t/m 6
      const zinnen = Array.from({ length: aantalZinnen }, () => maakZin(niveau, kiesFragment));
      zinnenTotaal += zinnen.length;
      paragrafen.push(zinnen.join(' '));
    }
    const tekst = paragrafen.join('\n\n');
    return { tekst, woordenAantal: telWoorden(tekst), zinnenAantal: zinnenTotaal, paragrafenAantal: paragrafen.length };
  }

  // eenheid === 'woorden'
  const zinnen: string[] = [];
  let woordenTotaal = 0;
  while (woordenTotaal < n) {
    const zin = maakZin(niveau, kiesFragment);
    zinnen.push(zin);
    woordenTotaal += telWoorden(zin);
  }
  const tekst = zinnen.join(' ');
  return { tekst, woordenAantal: woordenTotaal, zinnenAantal: zinnen.length, paragrafenAantal: 1 };
}
