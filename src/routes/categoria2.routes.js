import {Router} from "express";
import { ObtenerAuto, 
    ObtenerAutoClasico, 
    crearAuto, 
    deleteAuto, 
    updateAuto 
} from "../controllers/categoria2.controller.js";

const rutas = Router()
rutas.get("/categorias2", ObtenerAuto);
rutas.post("/categorias2", crearAuto);
rutas.put("/categorias2/:id", updateAuto);
rutas.delete("/categorias2/:id", deleteAuto);
rutas.get("/categorias2/:id", ObtenerAutoClasico);


export default rutas;