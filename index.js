const runtime = require('spawn-runtime')

module.exports = runtime('arduino-cli-runtime', 'arduino-cli', { spawn: false })