import { groq } from "next-sanity";

export const heroProfileQuery = groq`
  *[_type == "profile"][0]{
    displayName,
    descriptions,
    photo{
      asset->{
        url
      }
    },
    cvLink
  }
`;