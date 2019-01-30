import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import TrackList from '../client/components/track-list';
import { GET_TRACKS } from '../client/queries/get-tracks';

const mockGraphQlResponse = [
  {
    request: {
      query: GET_TRACKS
    },
    result: {
      data: {
        tracks: [
          {
            title: "Every Day",
            artist: "Eric Prydz"
          },
          {
            title: "Opus",
            artist: "Eric Prydz"
          }
        ]
      }
    }
  }
];

test('should match snapshot when tracks provided', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mockGraphQlResponse} addTypename={false}>
      <TrackList />
    </MockedProvider>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();

  expect(wrapper.html()).toMatchSnapshot();
});

test('should match snapshot when waiting for data', async () => {
  const wrapper = shallow(
    <MockedProvider mocks={mockGraphQlResponse} addTypename={false}>
      <TrackList />
    </MockedProvider>
  );

  expect(wrapper.html()).toMatchSnapshot();
});