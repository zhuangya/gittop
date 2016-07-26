'use strict';

import test from 'ava';

import gittop from '.';

test('get git top dir', t => {
  t.is(gittop(), __dirname);
});
