const fs = require('fs')
let tareas = fs.readFileSync('./tareas.json', 'utf-8')
let tareasArray = JSON.parse(tareas)

module.exports = tareasArray;