import type { Eenheid, Niveau, Taal } from '../generator/types';

const PRESETS: Record<Eenheid, number[]> = {
  woorden: [10, 25, 50, 100, 250, 500, 1000],
  zinnen: [3, 5, 10, 20],
  paragrafen: [1, 3, 5],
};

const EENHEID_LABELS: Record<Taal, Record<Eenheid, string>> = {
  nl: { woorden: 'Woorde', zinnen: 'Zinne', paragrafen: 'Paaardagrafe' },
  en: { woorden: 'Wordz', zinnen: 'Sentencez', paragrafen: 'Horsagraphz' },
};

const NIVEAU_LABELS: Record<Taal, Record<Niveau, string>> = {
  nl: { normaal: 'Saai paart 👎', gevorderd: 'Ponie 🐴', 'volledig-paard': 'Mooi paart ❤️' },
  en: { normaal: 'Boring hors 👎', gevorderd: 'Pony 🐴', 'volledig-paard': 'Pretty hors ❤️' },
};

const LABELS: Record<Taal, { watsoort: string; hoeveel: string; paartNivo: string; genereer: string }> = {
  nl: { watsoort: 'Watsoort', hoeveel: 'Hoeveel', paartNivo: 'Paart nivo', genereer: 'Genereer Paard Ipsum' },
  en: { watsoort: 'Wut kind', hoeveel: 'How much', paartNivo: 'Hors lvl', genereer: 'Generate Hors Ipsum' },
};

interface Props {
  eenheid: Eenheid;
  aantal: number;
  niveau: Niveau;
  taal: Taal;
  onEenheidChange: (eenheid: Eenheid) => void;
  onAantalChange: (aantal: number) => void;
  onNiveauChange: (niveau: Niveau) => void;
  onGenereer: () => void;
}

export function GeneratorControls({
  eenheid,
  aantal,
  niveau,
  taal,
  onEenheidChange,
  onAantalChange,
  onNiveauChange,
  onGenereer,
}: Props) {
  const presets = PRESETS[eenheid];
  const eenheidLabels = EENHEID_LABELS[taal];
  const niveauLabels = NIVEAU_LABELS[taal];
  const labels = LABELS[taal];

  return (
    <div className="controls-card">
      <div className="control-group">
        <span className="control-label">{labels.watsoort}</span>
        <div className="segmented" role="tablist" aria-label={labels.watsoort}>
          {(Object.keys(eenheidLabels) as Eenheid[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={eenheid === key}
              className={`segmented-option${eenheid === key ? ' is-active' : ''}`}
              onClick={() => onEenheidChange(key)}
            >
              {eenheidLabels[key]}
            </button>
          ))}
        </div>
      </div>

      <div className="control-group">
        <span className="control-label">{labels.hoeveel}</span>
        <select
          className="lengte-select"
          value={aantal}
          onChange={(event) => onAantalChange(Number(event.target.value))}
          aria-label={labels.hoeveel}
        >
          {presets.map((waarde) => (
            <option key={waarde} value={waarde}>
              {waarde} {eenheidLabels[eenheid].toLowerCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <span className="control-label">{labels.paartNivo}</span>
        <div className="segmented" role="tablist" aria-label={labels.paartNivo}>
          {(Object.keys(niveauLabels) as Niveau[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={niveau === key}
              className={`segmented-option${niveau === key ? ' is-active' : ''}`}
              onClick={() => onNiveauChange(key)}
            >
              {niveauLabels[key]}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="btn-primary" onClick={onGenereer}>
        {labels.genereer}
      </button>
    </div>
  );
}
