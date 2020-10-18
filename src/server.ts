import express from 'express';
import './database/connection';

const app = express();

app.use(express.json());

app.get('/users',(request, response)=>{
    //console.log('teste');
    return response.json({message: 'Hello World'});
});


app.listen(3333);

//req res

//rota = conjunto
//recurso = usuario
//métodos http = get, post, put, delete
//get buscar uma informação(lista,item,..)
//post = criando uma informação
//put = editar uma informação
//delete = deletar uma informação
//parametros para as rotas
//  - Query params: utilizado para busca, filtros
//  - route params: identificar um recurso
//  - body: corpo da requisição, vem as informações dos formulários
