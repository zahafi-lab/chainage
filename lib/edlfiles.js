'use strict'
const fs = require('fs')

function genServerNames(students, filepath) {
  let wstream = fs.createWriteStream(filepath)
  for (let i = 0; i < students.length; i++) {
    wstream.write(students[i].name + '\n')
  }
  wstream.end()
}

function genStudentList(students, filepath) {
  let wstream = fs.createWriteStream(filepath)
  wstream.write('name,github\n')
  for (let i = 0; i < students.length; i++) {
    wstream.write(students[i].name + ',' + students[i].github_account + '\n')
  }
  wstream.end()
}

function genUsersKeys(students, dirpath) {
  for (let i = 0; i < students.length; i++) {
    fs.writeFileSync(dirpath + students[i].name, students[i].ssh_pub_key)
  }
}

module.exports = {genServerNames, genUsersKeys, genStudentList}
