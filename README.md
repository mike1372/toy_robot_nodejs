Toy Robot Simulator
===================

This project was written to the specification as described in the ```specification``` file in this repository.

Architecture
------------

The basic architecture is as follows:
* The main program loop:
    * Creates all program objects required for the simulation
    * Runs continuously upon invocation and until receiving an exit command
    * Accepts input from stdin
    * Uses a command interpreter to format and validate input commands before passing them on to a simulator
* The command interpreter:
	* Receives input from the main program loop for validation
    * Prevents a PLACE command from being issued that would place the robot out of the table bounds
	* Processes the input and converts it into a format to send to the simulator
* The simulator:
	* Responsible for commanding the robot to perform various actions
* The robot:
	* Knows whether or not it is on the table
	* Once on the table it knows its position in X and Y coordinates and the direction with which it is facing
	* Is able to move position and turn direction
	* Is able to report its position and direction
    * Once placed on the table, is responsible for prevenitng itself from falling off
* The table:
    * Knows what size it is, in this case static dimensions of 5 by 5 units

Setup
-----

Ensure node.js is installed on the target system and that the following command is run to install the Mocha and Chai test libraries:

```
sudo npm install mocha
sudo npm install chai
```

Then clone this repoistory:

```
git clone https://github.com/mike1372/toy_robot_nodejs.git
```

Running the simulation
----------------------

The simulation is run by issuing the folowing command:

```
node lib/main.js
```

Commands can be input at the command prompt once the program is running, any output is sent to stdout. Type ```exit``` to end.

Testing is performed by running the following command:

```
mocha tests
```

This simulator was developed on Node.js 10.16.3, it is not guaranteed to work with other versions.

Problems
--------

* One test case for the interpreter does not work, I don't know why, this needs rectifying.

To Do
-----

* The robot does too much - perhaps add someting to handle the validation of movement, i.e. is it safe to move forward given a particular position and direction?
* The table is not used at all - the robot should reference it to see what the dimensions are.
* Should not be relying on the robot REPORT command of the robot in the simulation test - this needs to be addressed.
