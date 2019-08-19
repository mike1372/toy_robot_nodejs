// Simulator object - manages the simulation

function Simulator() {
}

Simulator.prototype.run_command = function(command, robot, table) {
    if (Array.isArray(command)) {
        robot.place(command);
    } else if (command === 'MOVE') {
        robot.move();
    } else if (command === 'LEFT') {
        robot.turn_left();
    } else if (command === 'RIGHT') {
        robot.turn_right();
    } else if (command === 'REPORT') {
        return robot.report();
    }
}

module.exports = {
    Simulator: Simulator
}
