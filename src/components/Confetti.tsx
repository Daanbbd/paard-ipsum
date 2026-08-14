import { useState } from 'react';

interface Stukje {
  id: number;
  kleur: string;
  links: number;
  vertraging: number;
  duur: number;
}

const KLEUREN = ['#e0575b', '#e8973d', '#d9be3f', '#4f9e6b', '#3f8fc5', '#8467c9', '#c65fa6', '#d4a24c'];

let volgendId = 0;

export function useConfetti() {
  const [stukjes, setStukjes] = useState<Stukje[]>([]);

  function schiet() {
    const nieuw: Stukje[] = Array.from({ length: 44 }, () => ({
      id: volgendId++,
      kleur: KLEUREN[Math.floor(Math.random() * KLEUREN.length)],
      links: Math.random() * 100,
      vertraging: Math.random() * 0.3,
      duur: 1.8 + Math.random() * 1.2,
    }));
    setStukjes((huidig) => [...huidig, ...nieuw]);
    const ids = new Set(nieuw.map((s) => s.id));
    window.setTimeout(() => {
      setStukjes((huidig) => huidig.filter((s) => !ids.has(s.id)));
    }, 3400);
  }

  return { stukjes, schiet };
}

export function ConfettiLaag({ stukjes }: { stukjes: Stukje[] }) {
  if (stukjes.length === 0) return null;
  return (
    <div className="confetti-laag" aria-hidden="true">
      {stukjes.map((s) => (
        <span
          key={s.id}
          className="confetti-stukje"
          style={{
            left: `${s.links}vw`,
            backgroundColor: s.kleur,
            animationDelay: `${s.vertraging}s`,
            animationDuration: `${s.duur}s`,
          }}
        />
      ))}
    </div>
  );
}
