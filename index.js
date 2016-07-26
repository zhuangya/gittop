'use strict';

const {execSync} = require('child_process');
const trim = require('trim');

module.exports = () => {
  try {
    return trim(execSync('git rev-parse --show-toplevel', {
      stdio: ['pipe', 'pipe', 'ignore'],
      encoding: 'utf-8'
    }));
  } catch (e) {
    if (e.status === 128) {
      throw 'it\'s not a git repo';
    }
    throw 'something went wrong';
  }
};
