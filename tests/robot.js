var chai = require('chai');
var expect = chai.expect;
let robots = require('../lib/robot.js');
let Robot = robots.Robot;

describe('Robot', function() {
  var robot = new Robot;

  it('should not have its x position set', function() {
    expect(robot.position_x).to.equal(null);
  });

  it('should not have its y position set', function() {
    expect(robot.position_y).to.equal(null);
  });

  it('should not have its direction set', function() {
    expect(robot.direction).to.equal(null);
  });

  it('should report its position and direction', function() {
    expect(robot.report()).to.equal('Robot not yet on the board');
  });

  it('should report its position and direction once placed on the board', function() {
    robot.place([0, 0, 'NORTH']);
    expect(robot.report()).to.equal('0,0,NORTH');
  });

  it('should report its position and direction after receiving multiple PLACE commands', function() {
    robot.place([0, 0, 'NORTH']);
    robot.place([1, 1, 'SOUTH']);
    expect(robot.report()).to.equal('1,1,SOUTH');
  });

  it('should report its position and direction once placed on the board', function() {
    robot.place([0, 0, 'NORTH']);
    expect(robot.report()).to.equal('0,0,NORTH');
  });

  it('should turn to the left from the NORTH', function() {
    robot.place([0, 0, 'NORTH']);
    robot.turn_left();
    expect(robot.report()).to.equal('0,0,WEST');
  });

  it('should turn to the right from the NORTH', function() {
    robot.place([0, 0, 'NORTH']);
    robot.turn_right();
    expect(robot.report()).to.equal('0,0,EAST');
  });

  it('should turn to the left from the EAST', function() {
    robot.place([0, 0, 'EAST']);
    robot.turn_left();
    expect(robot.report()).to.equal('0,0,NORTH');
  });

  it('should turn to the right from the EAST', function() {
    robot.place([0, 0, 'EAST']);
    robot.turn_right();
    expect(robot.report()).to.equal('0,0,SOUTH');
  });

  it('should turn to the left from the SOUTH', function() {
    robot.place([0, 0, 'SOUTH']);
    robot.turn_left();
    expect(robot.report()).to.equal('0,0,EAST');
  });

  it('should turn to the right from the SOUTH', function() {
    robot.place([0, 0, 'SOUTH']);
    robot.turn_right();
    expect(robot.report()).to.equal('0,0,WEST');
  });

  it('should turn to the left from the WEST', function() {
    robot.place([0, 0, 'WEST']);
    robot.turn_left();
    expect(robot.report()).to.equal('0,0,SOUTH');
  });

  it('should turn to the right from the WEST', function() {
    robot.place([0, 0, 'WEST']);
    robot.turn_right();
    expect(robot.report()).to.equal('0,0,NORTH');
  });

  it('should move to the NORTH', function() {
    robot.place([2, 2, 'NORTH']);
    robot.move();
    expect(robot.report()).to.equal('2,3,NORTH');
  });

  it('should move to the EAST', function() {
    robot.place([2, 2, 'EAST']);
    robot.move();
    expect(robot.report()).to.equal('3,2,EAST');
  });

  it('should move to the SOUTH', function() {
    robot.place([2, 2, 'SOUTH']);
    robot.move();
    expect(robot.report()).to.equal('2,1,SOUTH');
  });

  it('should move to the WEST', function() {
    robot.place([2, 2, 'WEST']);
    robot.move();
    expect(robot.report()).to.equal('1,2,WEST');
  });

  it('should not move off the NORTH side of the board', function() {
    robot.place([2, 4, 'NORTH']);
    robot.move();
    expect(robot.report()).to.equal('2,4,NORTH');
  });

  it('should not move off the EAST side of the board', function() {
    robot.place([4, 2, 'EAST']);
    robot.move();
    expect(robot.report()).to.equal('4,2,EAST');
  });

  it('should not move off the SOUTH side of the board', function() {
    robot.place([2, 0, 'SOUTH']);
    robot.move();
    expect(robot.report()).to.equal('2,0,SOUTH');
  });

  it('should not move off the WEST side of the board', function() {
    robot.place([0, 2, 'WEST']);
    robot.move();
    expect(robot.report()).to.equal('0,2,WEST');
  });
});
