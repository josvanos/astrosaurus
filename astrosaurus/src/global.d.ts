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
  menu: {
    [key: string]: string | MenuItem;
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

type MenuItem = {
  title: string;
  to: string;
};

type Author = {
  key: string;
  name: string;
  picture: string;
};
