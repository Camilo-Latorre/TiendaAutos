import {Router} from "express";
import { ObtenerAuto, 
    ObtenerAutoDeportivo, 
    crearAuto, 
    deleteAuto, 
    updateAuto 
} from "../controllers/categoria1.controller.js";

const router = Router()

router.get("/categoria", ObtenerAuto);
router.post("/categoria", crearAuto);
router.put("/categoria/:id", updateAuto);
router.delete("/categoria/:id", deleteAuto);
router.get("/categoria/:id", ObtenerAutoDeportivo);

export default router;