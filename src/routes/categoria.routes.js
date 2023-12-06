import {Router} from "express";
import { ObtenerAutoDepor, 
    ObtenerAutoDeportivo, 
    crearAuto, 
    deleteAuto, 
    updateAuto 
} from "../controllers/categoria1.controller.js";

const rut = Router()

rut.get("/categoria", ObtenerAutoDepor);
rut.post("/categoria", crearAuto);
rut.put("/categoria/:id", updateAuto);
rut.delete("/categoria/:id", deleteAuto);
rut.get("/categoria/:id", ObtenerAutoDeportivo);

export default rut;