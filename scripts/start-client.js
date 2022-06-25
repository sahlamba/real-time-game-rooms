const path = require('path')
const { exec } = require('child_process')

const CLIENT_DIR = path.resolve(__dirname, '..', 'client')

exec('npm start', {
  cwd: CLIENT_DIR,
})
