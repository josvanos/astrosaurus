export { astrosaurusAdvancedMarkdown } from "./markdown/notes";

export const defineConfig = (config: Config) => {
  globalThis.astrosaurus = config;
  return config;
};
