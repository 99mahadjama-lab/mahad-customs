const core = require('./node_modules/@actions/core')

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello, ${nameToGreet}!`);
    core.setOutput('time', new Date().toString());
} catch (error) {
    core.setFailed(error.message);
}