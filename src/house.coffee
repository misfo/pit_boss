#
# The House runs the tables and maintains the edge.
#
#Player = require '../lib/player'

global.uuid = require 'node-uuid'
{EventEmitter} = require 'events'

Table  = require '../lib/table'

module.exports = class House extends EventEmitter
  constructor: ->
    @tables = []
    @tables.push new Table

