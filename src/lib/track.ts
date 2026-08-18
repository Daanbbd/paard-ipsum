declare global {
  interface Window {
    goatcounter?: {
      count: (options: { path: string; title?: string; event?: boolean }) => void;
    };
  }
}

// Dunne wrapper om GoatCounter — faalt altijd stil (adblockers, script niet geladen, etc.)
// zodat analytics nooit de eigenlijke app kan breken.
export function track(pad: string) {
  try {
    window.goatcounter?.count({ path: `event/${pad}`, event: true });
  } catch {
    // negeren
  }
}
