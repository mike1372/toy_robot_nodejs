var chai = require('chai');
var expect = chai.expect;
let simulators = require('../lib/simulator.js');
let Simulator = simulators.Simulator;
let robots = require('../lib/robot.js');
let Robot = robots.Robot;
let tables = require('../lib/table.js');
let Table = tables.Table;

describe('Simulator', function() {
  var simulator = new Simulator;
  var robot = new Robot;
  var table = new Table;

  it('should issue a PLACE command to the robot', function() {
    simulator.run_command([0, 0, 'NORTH'], robot, table);
    expect(robot.report()).to.equal('0,0,NORTH');
  });

  it('should issue a MOVE command to the robot', function() {
    simulator.run_command([0, 0, 'NORTH'], robot, table);
    simulator.run_command('MOVE', robot, table);
    expect(robot.report()).to.equal('0,1,NORTH');
  });

  it('should issue a LEFT command to the robot', function() {
    simulator.run_command([0, 0, 'NORTH'], robot, table);
    simulator.run_command('LEFT', robot, table);
    expect(robot.report()).to.equal('0,0,WEST');
  });

  it('should issue a RIGHT command to the robot', function() {
    simulator.run_command([0, 0, 'NORTH'], robot, table);
    simulator.run_command('RIGHT', robot, table);
    expect(robot.report()).to.equal('0,0,EAST');
  });

  it('should issue a REPORT command to the robot', function() {
    simulator.run_command([0, 0, 'NORTH'], robot, table);
    expect(simulator.run_command('REPORT', robot, table)).to.equal('0,0,NORTH');
  });
});
