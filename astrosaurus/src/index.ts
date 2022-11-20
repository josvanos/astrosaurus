export const defineConfig = (config: Config) => {
  globalThis.astrosaurus = config;
  return config;
};

export const defineAuthor = (author: Author) => {
  return author;
};
