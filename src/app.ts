import routes from './routes'
import cors from 'cors'
import express from 'express'

//iniciar o express
const app = express();

//definir as regras do servidor
//meio de comunicação é um json

app.use(express.json());

//definir como os dados vão ser interpretados
app.use(express.urlencoded({extended: true}));

//definir o cors - middleware para aplicações node.js com express
//que permite ou restringe requisições entre origens diferentes
// ou seja requisição cross-origin
app.use(cors());

//definir as rotas
app.use(routes);

export default app;