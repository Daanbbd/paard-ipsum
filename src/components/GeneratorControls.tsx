import type { Eenheid, Niveau } from '../generator/types';

const PRESETS: Record<Eenheid, number[]> = {
  woorden: [10, 25, 50, 100, 250, 500, 1000],
  zinnen: [3, 5, 10, 20],
  paragrafen: [1, 3, 5],
};

const EENHEID_LABELS: Record<Eenheid, string> = {
  woorden: 'Woorde',
  zinnen: 'Zinne',
  paragrafen: 'Paaardagrafe',
};

const NIVEAU_LABELS: Record<Niveau, string> = {
  normaal: 'Saai paart 👎',
  gevorderd: 'Ponie 🐴',
  'volledig-paard': 'Mooi paart ❤️',
};

interface Props {
  eenheid: Eenheid;
  aantal: number;
  niveau: Niveau;
  onEenheidChange: (eenheid: Eenheid) => void;
  onAantalChange: (aantal: number) => void;
  onNiveauChange: (niveau: Niveau) => void;
  onGenereer: () => void;
}

export function GeneratorControls({
  eenheid,
  aantal,
  niveau,
  onEenheidChange,
  onAantalChange,
  onNiveauChange,
  onGenereer,
}: Props) {
  const presets = PRESETS[eenheid];

  return (
    <div className="controls-card">
      <div className="control-group">
        <span className="control-label">Watsoort</span>
        <div className="segmented" role="tablist" aria-label="Watsoort tekst">
          {(Object.keys(EENHEID_LABELS) as Eenheid[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={eenheid === key}
              className={`segmented-option${eenheid === key ? ' is-active' : ''}`}
              onClick={() => onEenheidChange(key)}
            >
              {EENHEID_LABELS[key]}
            </button>
          ))}
        </div>
      </div>

      <div className="control-group">
        <span className="control-label">Hoeveel</span>
        <select
          className="lengte-select"
          value={aantal}
          onChange={(event) => onAantalChange(Number(event.target.value))}
          aria-label="Hoeveel"
        >
          {presets.map((waarde) => (
            <option key={waarde} value={waarde}>
              {waarde} {EENHEID_LABELS[eenheid].toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <span className="control-label">Paart nivo</span>
        <div className="segmented" role="tablist" aria-label="Paart nivo">
          {(Object.keys(NIVEAU_LABELS) as Niveau[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={niveau === key}
              className={`segmented-option${niveau === key ? ' is-active' : ''}`}
              onClick={() => onNiveauChange(key)}
            >
              {NIVEAU_LABELS[key]}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="btn-primary" onClick={onGenereer}>
        Genereer Paard Ipsum
      </button>
    </div>
  );
}
