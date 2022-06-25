const path = require('path')
const { exec } = require('child_process')

const CLIENT_DIR = path.resolve(__dirname, '..', 'client')

exec('npm run build', {
  cwd: CLIENT_DIR,
})
