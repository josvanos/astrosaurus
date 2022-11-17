declare module globalThis {
  var astrosaurus: Config;
}

type Config = {
  site: {
    title: string;
    logo?: string;
    description: string;
    editUrl?: string;
    inviteUrl?: string;
  };

  theme?: {
    colors?: {
      primary?: string;
      secondary?: string;
    };
    extend: {
      nav?: AstroComponent;
      head?: AstroComponent;
      layout?: AstroComponent;
    };
  };

  socials?: {};
};
