export type Profile = {
    displayName: string;
    descriptions: string[];
    photo?: {
      asset?: {
        url: string;
      };
    };
    cvLink: string;
  };