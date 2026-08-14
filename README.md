# Paard Ipsum

Een Lorem Ipsum-generator, maar dan volledig in de stem van een overenthousiast paardenmeisje op MSN/Hyves: fout gespeld, vol staljargon, verkleinwoordjes en xxx'jes. Volledig client-side, geen backend, geen database.

**[Live demo →](https://daanbbd.github.io/paard-ipsum/)**

## Functionaliteit

- Genereer tekst in **woorden**, **zinnen** of **paardagrafen**, met vaste lengte-presets of een numeriek aantal.
- Drie "paart nivo's" die de intensiteit van de chaos (spelfouten, CAPS LOCK, emoticons, xxx'jes) opschroeven: Saai paart 👎, Ponie 🐴, Mooi paart ❤️.
- Eén klik kopiëren naar het klembord met visuele feedback.
- Woorden/zinnen/paardagrafen-teller bij elke generatie.
- Output verschijnt in een scrollbaar venster, zodat lange teksten de pagina niet uitrekken.
- Rainbow-gradient titel, animeerde rainbow-rand op de generate-knop, en een confetti-burst bij elke generatie.

## Techniek

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- Puur CSS, geen UI-framework
- Generatorlogica gebaseerd op een fragmentenbank (`src/data/paardemeisje.ts`) die willekeurig wordt gecombineerd en "verbasterd" (CAPS LOCK, opgerekte letters, flourishes) in `src/generator/generateIpsum.ts`

### Projectstructuur

```
src/
  data/paardemeisje.ts       woordenbank, fragmenten, connectors, flourishes
  generator/                 generatielogica en types
  components/                Hero, GeneratorControls, OutputPanel, Confetti
  hooks/useClipboard.ts       clipboard-logica
```

## Lokaal draaien

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployen naar GitHub Pages

Deployment gaat automatisch via GitHub Actions (`.github/workflows/deploy.yml`) bij elke push naar `main`:

```bash
git push origin main
```

De workflow bouwt de app en publiceert `dist/` naar GitHub Pages. Zorg dat Pages in de repo-instellingen op "GitHub Actions" staat als bron (Settings → Pages → Source).

De site is geconfigureerd voor `https://daanbbd.github.io/paard-ipsum/` (zie `base` in `vite.config.ts`). Gebruik je een andere repo-naam of gebruikersnaam, pas dan `base` in `vite.config.ts` en de `og:url`/`og:image` in `index.html` aan.
