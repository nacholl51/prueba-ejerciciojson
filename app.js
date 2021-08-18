
const tareas = require('./funcionesDeTareas')
//console.log(libros);


//este metodo permite pasar parametros por consola
switch(process.argv[2]) {

    case 'listar': console.log(tareas);
    break;
    
    case undefined: console.log("Atención - Tienes que pasar una acción.");
    break;
    
    default: 
    console.log("No entiendo qué quieres hacer.");
    break;
    
    }
    

    