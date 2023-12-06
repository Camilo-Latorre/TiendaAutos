import express from "express";
import path from "path";
import bodyParser from 'body-parser';
import loggerMiddleware from './database/loggerMiddleware.js';
import rutas from './routes/categoria2.routes.js';
import enlaces from './routes/categoria3.routes.js';
import CATEGORIASRoutes from './routes/CATEGORIAS.routes.js';
import CategoriasRouter from './routes/categoria.routes.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

//Middelewares
app.use(loggerMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(CATEGORIASRoutes);
app.use(CategoriasRouter);
app.use(bodyParser.json());

app.use(express.static(join(__dirname, 'public')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));






export default app;