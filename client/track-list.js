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
        <select name="track">
          {data.tracks.map(track => (
            <option key={track.title} value={track.title}>
              {track.artist}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
}

export default TrackList;