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

export const experienceQuery = groq`
  *[_type == "experience"]{
    name,
    company,
    duration,
    type,
    description,

    logo{
      asset->{
        _id,
        url
      }
    },

    images[]{
      asset->{
        _id,
        url
      }
    }
  }
`;
