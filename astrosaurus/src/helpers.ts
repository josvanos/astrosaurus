export function getConfig() {
  if (!globalThis.astrosaurus) {
    console.error("[🦕] Astrosaurus Config has not been initialized correctly");
  }

  return globalThis.astrosaurus;
}
