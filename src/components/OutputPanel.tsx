import type { GenerateResult } from '../generator/types';

interface Props {
  resultaat: GenerateResult | null;
  gekopieerd: boolean;
  onKopieer: () => void;
}

function meervoud(aantal: number, enkelvoud: string, meervoud: string): string {
  return aantal === 1 ? enkelvoud : meervoud;
}

export function OutputPanel({ resultaat, gekopieerd, onKopieer }: Props) {
  return (
    <div className="output-card">
      <div className="output-tekst" aria-live="polite">
        {resultaat ? (
          resultaat.tekst.split('\n\n').map((paragraaf, index) => <p key={index}>{paragraaf}</p>)
        ) : (
          <p className="output-placeholder">nog niks hier... klik effe op &ldquo;genereer paard ipsum&rdquo; xxx</p>
        )}
      </div>

      {resultaat && (
        <div className="output-tellers">
          <span>
            <strong>{resultaat.woordenAantal}</strong> {meervoud(resultaat.woordenAantal, 'woord', 'woorden')}
          </span>
          <span>
            <strong>{resultaat.zinnenAantal}</strong> {meervoud(resultaat.zinnenAantal, 'zin', 'zinnen')}
          </span>
          <span>
            <strong>{resultaat.paragrafenAantal}</strong>{' '}
            {meervoud(resultaat.paragrafenAantal, 'paardagraaf', 'paardagrafen')}
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
          {gekopieerd ? 'Gekopjeerd!!' : 'Kopjeer tekst'}
        </button>
      </div>
    </div>
  );
}
