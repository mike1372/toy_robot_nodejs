var chai = require('chai');
var expect = chai.expect;
let robots = require('../lib/robot.js');
let Robot = robots.Robot;

describe('Robot', function() {
  var robot = new Robot;

  it('should report its position and direction', function() {
    expect(robot.report()).to.equal('Robot not yet on the board');
  });

  it('should report its position and direction once placed on the board', function() {
    robot.place([0, 0, 'NORTH']);
    expect(robot.report()).to.equal('0,0,NORTH');
  });
});
