import {Router} from "express";
import { 
    getCATEGORIA, 
    getCategorias
} from "../controllers/categoria.controller.js";

import { ObtenerAuto, 
    ObtenerAutoClasico
} from "../controllers/categoria2.controller.js";

import { ObtenerAuto, 
    ObtenerAuto4x4
} from "../controllers/categoria3.controller.js";

import { ObtenerAuto, 
    ObtenerAutoDeportivo
} from "../controllers/categoria1.controller.js";



const routesUser = Router()

routesUser.get("/categorias", getCATEGORIA);
routesUser.get("/categorias/:id", getCategorias);
routesUser.get("/categorias2", ObtenerAuto);
routesUser.get("/categorias2/:id", ObtenerAutoClasico);
routesUser.get("/categorias3", ObtenerAuto);
routesUser.get("/categorias3/:id", ObtenerAuto4x4);
routesUser.get("/categoria", ObtenerAuto);
routesUser.get("/categoria/:id", ObtenerAutoDeportivo);


export default routesUser;