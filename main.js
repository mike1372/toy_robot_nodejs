let interpreters = require('./interpreter.js');
let Interpreter = interpreters.Interpreter;

var standard_input = process.stdin;
standard_input.setEncoding('utf-8');

// Instantiate all objects required for the simulation
let interpreter = new Interpreter;

console.log('Starting simulation');

// Main loop
standard_input.on('data', function (data) {
    if (data === 'exit\n') {
        console.log('Simulation exiting');
        process.exit(0);
    } else {
        interpreter.process(data);
    }
});
