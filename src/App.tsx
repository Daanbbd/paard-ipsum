import { useState } from 'react';
import horsAchtergrond from './assets/hors.jpg';
import { ConfettiLaag, useConfetti } from './components/Confetti';
import { GeneratorControls } from './components/GeneratorControls';
import { Hero } from './components/Hero';
import { OutputPanel } from './components/OutputPanel';
import { genereer } from './generator/generateIpsum';
import type { Eenheid, GenerateResult, Niveau } from './generator/types';
import { useClipboard } from './hooks/useClipboard';

const STANDAARD_AANTAL: Record<Eenheid, number> = {
  woorden: 50,
  zinnen: 5,
  paragrafen: 3,
};

function App() {
  const [eenheid, setEenheid] = useState<Eenheid>('woorden');
  const [aantal, setAantal] = useState<number>(STANDAARD_AANTAL.woorden);
  const [niveau, setNiveau] = useState<Niveau>('normaal');
  const [resultaat, setResultaat] = useState<GenerateResult | null>(() =>
    genereer({ eenheid: 'woorden', aantal: STANDAARD_AANTAL.woorden, niveau: 'normaal' }),
  );
  const { gekopieerd, kopieer } = useClipboard();
  const { stukjes, schiet } = useConfetti();

  function handleGenereer() {
    setResultaat(genereer({ eenheid, aantal, niveau }));
    schiet();
  }

  function handleEenheidChange(nieuweEenheid: Eenheid) {
    setEenheid(nieuweEenheid);
    setAantal(STANDAARD_AANTAL[nieuweEenheid]);
  }

  return (
    <div className="app-shell">
      <div className="bg-hors" style={{ backgroundImage: `url(${horsAchtergrond})` }} />
      <ConfettiLaag stukjes={stukjes} />
      <Hero />
      <main className="generator">
        <GeneratorControls
          eenheid={eenheid}
          aantal={aantal}
          niveau={niveau}
          onEenheidChange={handleEenheidChange}
          onAantalChange={setAantal}
          onNiveauChange={setNiveau}
          onGenereer={handleGenereer}
        />
        <OutputPanel
          resultaat={resultaat}
          gekopieerd={gekopieerd}
          onKopieer={() => resultaat && kopieer(resultaat.tekst)}
        />
      </main>
      <footer className="footer">
        <p>Gemaakd voor en door paardemense ❤️</p>
      </footer>
    </div>
  );
}

export default App;
