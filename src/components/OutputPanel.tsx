import type { GenerateResult, Taal } from '../generator/types';

interface Props {
  resultaat: GenerateResult | null;
  gekopieerd: boolean;
  taal: Taal;
  onKopieer: () => void;
}

function meervoud(aantal: number, enkelvoud: string, meervoud: string): string {
  return aantal === 1 ? enkelvoud : meervoud;
}

const TEKSTEN: Record<
  Taal,
  {
    placeholder: string;
    woord: [string, string];
    zin: [string, string];
    paardagraaf: [string, string];
    kopieer: string;
    gekopieerd: string;
  }
> = {
  nl: {
    placeholder: 'nog niks hier... klik effe op "genereer paard ipsum" xxx',
    woord: ['woord', 'woorden'],
    zin: ['zin', 'zinnen'],
    paardagraaf: ['paardagraaf', 'paardagrafen'],
    kopieer: 'Kopjeer tekst',
    gekopieerd: 'Gekopjeerd!!',
  },
  en: {
    placeholder: 'nothin here yet... click "generate hors ipsum" xxx',
    woord: ['word', 'wordz'],
    zin: ['sentence', 'sentencez'],
    paardagraaf: ['horsagraph', 'horsagraphz'],
    kopieer: 'Copyy text',
    gekopieerd: 'Copiedd!!',
  },
};

export function OutputPanel({ resultaat, gekopieerd, taal, onKopieer }: Props) {
  const teksten = TEKSTEN[taal];

  return (
    <div className="output-card">
      <div className="output-tekst" aria-live="polite">
        {resultaat ? (
          resultaat.tekst.split('\n\n').map((paragraaf, index) => <p key={index}>{paragraaf}</p>)
        ) : (
          <p className="output-placeholder">{teksten.placeholder}</p>
        )}
      </div>

      {resultaat && (
        <div className="output-tellers">
          <span>
            <strong>{resultaat.woordenAantal}</strong>{' '}
            {meervoud(resultaat.woordenAantal, teksten.woord[0], teksten.woord[1])}
          </span>
          <span>
            <strong>{resultaat.zinnenAantal}</strong> {meervoud(resultaat.zinnenAantal, teksten.zin[0], teksten.zin[1])}
          </span>
          <span>
            <strong>{resultaat.paragrafenAantal}</strong>{' '}
            {meervoud(resultaat.paragrafenAantal, teksten.paardagraaf[0], teksten.paardagraaf[1])}
          </span>
        </div>
      )}

      <div className="output-acties">
        <button
          type="button"
          className={`btn-secondary${gekopieerd ? ' is-copied' : ''}`}
          onClick={onKopieer}
          disabled={!resultaat}
        >
          {gekopieerd ? teksten.gekopieerd : teksten.kopieer}
        </button>
      </div>
    </div>
  );
}
