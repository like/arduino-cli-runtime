const path = require('path')
const { execFileSync } = require('child_process')

module.exports = function spawn (name, referrer, opts = {}) {
  const {
    platform = process.platform,
    arch = process.arch
  } = opts

  const filename = path.basename(referrer)

  const base = `${name}-${platform}-${arch}`

  let mod
  try {
    mod = require.resolve(`${base}/package.json`)
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      throw new Error(`No binary found for target ${platform}-${arch}`)
    } else {
      throw err
    }
  }

  const pkg = require(mod)

  const bin = path.join(mod, '..', pkg.bin[filename])

  try {
    execFileSync(bin, process.argv.slice(2), { stdio: 'inherit' })
  } catch (err) {
    process.exitCode = err.status || 1
  }
}
