// Robot object

function Robot() {
    this.position_x = null;
    this.position_y = null;
    this.direction = null;
}

Robot.prototype.place = function(data) {
    this.position_x = data[0];
    this.position_y = data[1];
    this.direction = data[2];
}

Robot.prototype.move = function() {
    if (this.direction === 'NORTH' && this.position_y < 4) {
        this.position_y++;
    } else if (this.direction === 'EAST' && this.position_x < 4) {
        this.position_x++;
    } else if (this.direction === 'SOUTH' && this.position_y > 0) {
        this.position_y--;
    } else if (this.direction === 'WEST' && this.position_x > 0) {
        this.position_x--;
    }
}

Robot.prototype.turn_left = function() {
    if (this.direction != null) {
        if (this.direction === 'NORTH') {
            this.direction = 'WEST';
        } else if (this.direction === 'WEST') {
            this.direction = 'SOUTH';
        } else if (this.direction === 'SOUTH') {
            this.direction = 'EAST';
        } else if (this.direction === 'EAST') {
            this.direction = 'NORTH';
        }
    }
}

Robot.prototype.turn_right = function() {
    if (this.direction != null) {
        if (this.direction === 'NORTH') {
            this.direction = 'EAST';
        } else if (this.direction === 'EAST') {
            this.direction = 'SOUTH';
        } else if (this.direction === 'SOUTH') {
            this.direction = 'WEST';
        } else if (this.direction === 'WEST') {
            this.direction = 'NORTH';
        }
    }
}

Robot.prototype.report = function() {
    if (this.direction != null) {
        return this.position_x + ',' + this.position_y + ',' + this.direction;
    } else {
        return 'Robot not yet on the table';
    }
}

module.exports = {
    Robot: Robot
}
