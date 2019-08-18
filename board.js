// Board object - configures the board

function Board() {
    this.length = 5;
    this.width = 5;
}

Board.prototype.size = function() {
  return 'This board is of length ' + this.length + ' and width ' + this.width;
};

module.exports = {
  Board: Board
}
