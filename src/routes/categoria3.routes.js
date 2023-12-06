import {Router} from "express";
import { ObtenerAuto4x4, 
    ObtenerCoche, 
    crearAuto, 
    deleteAuto, 
    updateAuto 
} from "../controllers/categoria3.controller.js";

const enlaces = Router()

enlaces.get("/categorias3", ObtenerCoche);
enlaces.post("/categorias3", crearAuto);
enlaces.put("/categorias3/:id", updateAuto);
enlaces.delete("/categorias3/:id", deleteAuto);
enlaces.get("/categorias3/:id", ObtenerAuto4x4);


export default enlaces;