// @ts-nocheck
export async function getConfig() {
  try {
    const home = process.cwd();
    /* @vite-ignore */
    const config = await import(`${home}/config`);
    return config.astrosaurus;
  } catch (error) {
    warn("importing astrosaurus config failed");
  }
}

export function warn(message: string) {
  return console.log(`[🦕] \x1b[36m${message}  \x1b[0m`);
}
