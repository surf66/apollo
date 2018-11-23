import React from 'react';
import { render } from 'react-dom';
import TrackList from './track-list';

let targetElement = document.getElementById('track-list');
render(<TrackList />, targetElement);