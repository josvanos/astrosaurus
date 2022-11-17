// @ts-nocheck
export async function getConfig() {
  try {
    return globalThis.astrosaurus;
  } catch (error) {
    warn("importing astrosaurus config failed");
  }
}

export function warn(message: string) {
  return console.log(`[🦕] \x1b[36m${message}  \x1b[0m`);
}
