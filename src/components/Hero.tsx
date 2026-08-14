export function Hero() {
  return (
    <header className="hero">
      <div className="hero-hoofprints" aria-hidden="true">
        <HoofIcon className="hoof hoof-1" />
        <HoofIcon className="hoof hoof-2" />
        <HoofIcon className="hoof hoof-3" />
      </div>
      <h1 className="hero-title">Paard ipsum</h1>
      <p className="hero-subtitle">Tekste maaker voor friendinne</p>
    </header>
  );
}

function HoofIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 6c-8 0-14 7-14 16 0 6 3 10 3 15 0 9-9 12-9 19 0 3 3 4 6 3 6-2 9-6 14-6s8 4 14 6c3 1 6 0 6-3 0-7-9-10-9-19 0-5 3-9 3-15 0-9-6-16-14-16z" />
    </svg>
  );
}
