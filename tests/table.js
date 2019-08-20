var chai = require('chai');
var expect = chai.expect;
let tables = require('../lib/table.js');
let Table = tables.Table;

describe('Table', function() {
  var table = new Table;

  it('length should be 5', function() {
    expect(table.x_units).to.equal(5);
  });

  it('width should be 5', function() {
    expect(table.y_units).to.equal(5);
  });
});
