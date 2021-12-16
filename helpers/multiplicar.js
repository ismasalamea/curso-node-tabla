const fs = require('fs');
var colors = require('colors');

const CrearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '';
        let consola = '';
        consola += '=============================\n'.bgRed ;
        consola += `Tabla del ${colors.blue(base)}\n`;
        consola += '=============================\n'.bgRed;
    
        for(let i = 0; i <= hasta; i++){    
            salida += `${ base } ${'X'} ${ i } ${'='} ${base * i}\n`;
            consola += `${ base } ${'X'.green} ${ i } ${'='.grey} ${base * i}\n`;
        }
    
        if (listar) {
            console.log(consola);
        }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
}

module.exports = {
    CrearArchivo
}