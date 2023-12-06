import {Router} from "express";
import {
    createCategoria,  
    getCATEGORIA, 
    updateCategoria, 
    deleteCategoria, 
    getCategorias
} from "../controllers/categoria.controller.js";

const router = Router()

router.get("/Girografia", getCATEGORIA);
router.post("/Girografia", createCategoria);
router.put("/Girografia/:id", updateCategoria);
router.delete("/Girografia/:id", deleteCategoria);
router.get("/Girografia/:id", getCategorias);


export default router;