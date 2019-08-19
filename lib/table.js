// Table object - configures the table

function Table() {
    this.length = 5;
    this.width = 5;
}

Table.prototype.size = function() {
  return 'This table is of length ' + this.length + ' and width ' + this.width;
};

module.exports = {
  Table: Table
}
