import {Router} from "express";
import { GetCategoria,
    createCategoria,  
    getCATEGORIA, 
    updateCategoria, 
    deleteCategoria, 
    getCategorias,
    obtenerAutosPorCategoria
} from "../controllers/categoria.controller.js";

const router = Router()
router.get("/Girografia", GetCategoria)
router.get("/Girografia", getCATEGORIA);
router.post("/Girografia", createCategoria);
router.put("/Girografia/:id", updateCategoria);
router.delete("/Girografia/:id", deleteCategoria);
router.get("/Girografia/:id", getCategorias);
router.get("/Girografia/", obtenerAutosPorCategoria)

export default router;