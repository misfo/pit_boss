var vows = require('vows'),
    assert = require('assert');

var hotel = require('../hotel');

var Hotel = hotel.Hotel;

vows.describe('The Hotel').addBatch({
  'when first created': {
    topic: new(Hotel),
    'has no players checked in': function(topic) {
      assert.isEmpty(topic.currentPlayers);
    }
  }
}).export(module);

