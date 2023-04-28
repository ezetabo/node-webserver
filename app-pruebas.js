import http from 'http';

http.createServer((request, response)=>{

// response.setHeader('content-Disposition', 'attachment;filename=lista.csv');
// response.writeHead(200,{'Content-Type': 'application/json'});

    // const persona  = {
    //     id: 1,
    //     nombre: 'Jose',
    //     apellido:'Sanchez'
    // }

    response.write('hola mundo');
    response.end();
})
.listen(8080)

console.log('Escuchando el puerto ',8080);