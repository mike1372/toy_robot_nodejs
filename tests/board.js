var chai = require('chai');
var expect = chai.expect;
let boards = require('../lib/board.js');
let Board = boards.Board;

describe('Board', function() {
  var board = new Board;

  it('length should be 5', function() {
    expect(board.length).to.equal(5);
  });

  it('width should be 5', function() {
    expect(board.width).to.equal(5);
  });
});
