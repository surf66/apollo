import gql from "graphql-tag";

export const GET_TRACKS = gql`
  {
    tracks {
      title
      artist
    }
  }
`;