const cp = require('child_process');


cp.execSync('start chrome https://www.notion.so/Node-JS-notes-1bebbdcbba1a4550a3f89046e8df4091');

console.log('output' + cp.execSync( 'node demo.js'));