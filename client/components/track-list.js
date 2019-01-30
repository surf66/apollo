import React from 'react';
import { Query } from 'react-apollo';
import { GET_TRACKS } from '../queries/get-tracks';

const TrackList = () => {
  return <Query query={GET_TRACKS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return (
        <React.Fragment>
          {data.tracks.map((track, index) => {
            return <p key={index}><strong>{track.title}</strong>, {track.artist}</p>;
          })}
        </React.Fragment>
      );
    }}
  </Query>
}

export default TrackList;