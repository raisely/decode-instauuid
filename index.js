'use strict';

let masks = {
  timestamp: { length: 41, offset: 23 },
  additional: { length: 13, offset: 10 },
  counter: { length: 10 },
}

function get(key, x) {
  mask = createMask(masks[key].length, masks[key].offset);

  return x.and(mask).shiftRightUnsigned(masks[key].offset).toNumber();
}

function createMask(length, offset) {
  const low = length > 31 ? -1 : Math.pow(2, length + 1) - 1;
  const high = length < 33 ? 0 : Math.pow(2, length - 32 + 1) - 1;
  return new Long(low, high, true).shiftLeft(offset);
}

function decode(x) {
  const decoded = {};
  const asLong = Long.fromString(x, true);

  Object.keys(masks).forEach(function(mask) {
    decoded[mask] = get(mask, x);
  });

  return decoded;
}

module.exports = decode;
