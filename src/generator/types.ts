export type Eenheid = 'woorden' | 'zinnen' | 'paragrafen';

export type Niveau = 'normaal' | 'gevorderd' | 'volledig-paard';

export type Taal = 'nl' | 'en';

export interface GenerateOptions {
  eenheid: Eenheid;
  aantal: number;
  niveau: Niveau;
  taal: Taal;
}

export interface GenerateResult {
  tekst: string;
  woordenAantal: number;
  zinnenAantal: number;
  paragrafenAantal: number;
}
