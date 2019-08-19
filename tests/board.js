var chai = require('chai');
var expect = chai.expect;
let boards = require('../lib/board.js');
let Board = boards.Board;

describe('Board', function() {
  it('The size of the board should be 5 by 5', function() {
    var board = new Board;
    expect(board.size()).to.equal('This board is of length 5 and width 5');
  });
});