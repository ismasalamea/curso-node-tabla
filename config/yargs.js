const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Define si se lista la multiplicacion'                    
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Hasta que numero multiplicar'                    
                })
                .check ( (argv, options ) => {
                    if( isNaN( argv.b ) ) {
                        throw ' La base tiene que ser un numero'
                    }
                    if( isNaN( argv.h ) ) {
                        throw ' El multiplicador tiene que ser un numero'
                    }
                    return true
                })
                .argv;
module.exports = argv