console.log('Starting simulation');

var standard_input = process.stdin;

standard_input.setEncoding('utf-8');

// Main loop
standard_input.on('data', function (data) {
    if(data === 'exit\n') {
        console.log('Simulation exiting');
        process.exit(0);
    } else {
        console.log('Command is ' + data);
    }
});
