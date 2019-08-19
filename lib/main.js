// Import all modules and make their objects accessible
let interpreters = require('./interpreter.js');
let Interpreter = interpreters.Interpreter;
let simulators = require('./simulator.js');
let Simulator = simulators.Simulator;
let robots = require('./robot.js');
let Robot = robots.Robot;
let boards = require('./board.js');
let Board = boards.Board;
var standard_input = process.stdin;
standard_input.setEncoding('utf-8');

// Instantiate all objects required for the simulation
let interpreter = new Interpreter;
let simulator = new Simulator;
let robot = new Robot;
let board = new Board;

console.log('Starting simulation');

// Main loop
standard_input.on('data', function (data) {
    if (data === 'exit\n') {
        console.log('Simulation exiting');
        process.exit(0);
    } else {
        command = interpreter.process(data);
        if (command === 'INVALID') {
            console.log('Invalid command received, ignoring')
        } else {
            result = simulator.run_command(command, robot, board);
            if (result) {
                console.log(result);
            }
        }
    }
});
