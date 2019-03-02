/* to run: babel-node albums.js */

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQBbmXq391PspJV7uAByY4xBJRBjs60-wiczE0atxf5PgeYLwD9xqZaycbkA4Xw3Yiq0xsJtCtIHnTYAvpO5P74Cq0xCuPVUBbJ-XRvve8KvB96rrMk-zwqkMO8jLRwXoZ3uzBttiUKHMI1b2mBn7A3-UKVs2IPz_w'
});

const albums = spotify.search.albums('Paramore');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
