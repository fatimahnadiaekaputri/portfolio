export type Experience = {
    name: string;
    company: string;
    duration: string;
    type: string;
    description: string;
    logo?: {
      asset: {
        _id: string;
        url: string;
      };
    };
    images?: {
      asset: {
        _id: string;
        url: string;
      };
    }[];
  };
  