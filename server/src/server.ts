import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();//toda a aplicação passará no app

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);//ouvir endereço http na porta que irá ouvir










/**
 * Corpo (Request Body)-->Dados para criação ou atualização de um registro
 * Route Params-->Identificar qual recurso eu quero atualizar ou deletar
 * Query Params-->Usado para paginação, filtros, ordenação, passados na url e acessado com request query
 */