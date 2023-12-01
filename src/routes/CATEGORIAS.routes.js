import {Router} from "express";
import {
    createCategoria,  
    getCATEGORIA, 
    updateCategoria, 
    deleteCategoria, 
    getCategorias
} from "../controllers/categoria.controller.js";

const router = Router()

router.get("/categorias", getCATEGORIA);
router.post("/categorias", createCategoria);
router.put("/categorias/:id", updateCategoria);
router.delete("/categorias/:id", deleteCategoria);
router.get("/categorias/:id", getCategorias);


export default router;