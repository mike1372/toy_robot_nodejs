// Interpreter object - validates the user input

// Internal command data generated by this module:
// Place will be of the form [X, Y, D]
// Other commands will be one of [L], [R], [M]

function Interpreter() {
  }

Interpreter.prototype.process = function(input_data) {
    if (input_data.startsWith('PLACE')) {
        console.log('This is a PLACE command');
    } else if (input_data === 'MOVE\n') {
        console.log('This is a MOVE command');
    } else if (input_data === 'LEFT\n') {
        console.log('This is a LEFT command');
    } else if (input_data === 'RIGHT\n') {
        console.log('This is a RIGHT command');
    } else if (input_data === 'REPORT\n') {
        console.log('This is a REPORT command');
    } else {
        console.log('Invalid command received, ignoring');
    }
};

module.exports = {
    Interpreter: Interpreter
}
