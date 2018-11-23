import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_TRACKS = gql`
  {
    tracks {
      title
      artist
    }
  }
`;

const TrackList = () => {
  return <Query query={GET_TRACKS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <div>
          {data.tracks.map(track => (
            <p><strong>{track.title}</strong>, {track.artist}</p>
          ))}
        </div>
      );
    }}
  </Query>
}

export default TrackList;