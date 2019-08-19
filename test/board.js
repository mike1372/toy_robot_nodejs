var chai = require('chai');
var expect = chai.expect;
let boards = require('../board.js');
let Board = boards.Board;

describe('Board', function() {
  it('something', function() {
    var board = new Board;
    expect(board.size()).to.equal('This board is of length 5 and width 5');
  });
});
