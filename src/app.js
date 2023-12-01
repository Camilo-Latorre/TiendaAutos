import express from "express";
import bodyParser from 'body-parser';
import loggerMiddleware from './database/loggerMiddleware.js';
import CATEGORIASRoutes from './routes/CATEGORIAS.routes.js'
import CategoriasRouter from './routes/categoria.routes.js'

const app = express();

//Middelewares
app.use(loggerMiddleware);
app.use(express.json());
app.use(CATEGORIASRoutes);
app.use(CategoriasRouter);
app.use(bodyParser.json());



export default app;