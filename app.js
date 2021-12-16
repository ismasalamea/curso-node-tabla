
const { Console } = require('console');
const { appendFile } = require('fs');
const {CrearArchivo} = require ('./helpers/multiplicar');
var colors = require('colors');
const argv = require('./config/yargs');



console.clear();
CrearArchivo (argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log (nombreArchivo.rainbow, 'creado'))
    .catch (err => console.log (err));