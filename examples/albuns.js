global.fetch = require('node-fetch');

import { searchAlbuns } from '../src/main';

const albuns = searchAlbuns('Incubus');

albuns.then(data => data.albuns.items.map(item => console.log(item.name);));
