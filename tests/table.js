var chai = require('chai');
var expect = chai.expect;
let tables = require('../lib/table.js');
let Table = tables.Table;

describe('Table', function() {
  var table = new Table;

  it('length should be 5', function() {
    expect(table.length).to.equal(5);
  });

  it('width should be 5', function() {
    expect(table.width).to.equal(5);
  });
});
