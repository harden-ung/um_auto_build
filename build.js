const fs = require('fs-extra')

const stringsToExclude = [
  'node_modules',
  'app.js',
  'package-lock.json',
  'build.js',
  'obfuscator settings.png',
  'genres\\world\\',
  'genres\\dance\\',
  'genres\\classical\\',
  'genres\\electronic\\',
  'genres\\pop\\',
  'genres\\rock\\',
  'arts\\',
]

const filterFunc = (src, dest) => {
  if (stringsToExclude.some((string) => src.includes(string))) {
    return false
  }

  console.log('watch me src', src)
  console.log('watch me dest', dest)
  return true
  // your logic here
  // it will be copied if return true
}

fs.copy('./', '../um_auto_build', { filter: filterFunc }, (err) => {
  if (err) return console.error(err)
  console.log('success!')
})
