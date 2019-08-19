var chai = require('chai');
var expect = chai.expect;
let interpreters = require('../lib/interpreter.js');
let Interpreter = interpreters.Interpreter;

describe('Interpreter', function() {
  let interpreter = new Interpreter;

  it('should return a valid PLACE command', function() {
    expect(interpreter.process('PLACE 0,0,NORTH\n')).to.equal([0, 0, 'NORTH']);
  });

  it('should handle an invalid PLACE command', function() {
    expect(interpreter.process('PLACE0,0,NORTH\n')).to.equal('INVALID');
  });

  it('should handle an invalid PLACE command', function() {
    expect(interpreter.process('PLACE 00,NORTH\n')).to.equal('INVALID');
  });

  it('should handle an invalid PLACE command', function() {
    expect(interpreter.process('PLACE 0,0NORTH\n')).to.equal('INVALID');
  });

  it('should handle an invalid PLACE command', function() {
    expect(interpreter.process('PLACE 0,0,BLAH\n')).to.equal('INVALID');
  });

  it('should handle an invalid PLACE command', function() {
    expect(interpreter.process('PLACE 5,0,NORTH\n')).to.equal('INVALID');
  });

  it('should handle an invalid PLACE command', function() {
    expect(interpreter.process('PLACE 0,5,NORTH\n')).to.equal('INVALID');
  });

  it('should return a valid MOVE command', function() {
    expect(interpreter.process('MOVE\n')).to.equal('MOVE');
  });

  it('should return a valid LEFT command', function() {
    expect(interpreter.process('LEFT\n')).to.equal('LEFT');
  });

  it('should return a valid RIGHT command', function() {
    expect(interpreter.process('RIGHT\n')).to.equal('RIGHT');
  });

  it('should return a valid MOVE command', function() {
    expect(interpreter.process('REPORT\n')).to.equal('REPORT');
  });

  it('should handle an invalid command', function() {
    expect(interpreter.process('BLAH')).to.equal('INVALID');
  });
});
