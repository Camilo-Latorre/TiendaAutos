import { AutosDB } from "../models/Categorias.js";

export const obtenerDatosAutos = async (req, res) => {
    try {
      // Aquí obtienes los datos de la base de datos o de donde sea
      const autos = await AutosDB.findAll(); // Cambia esto según tu lógica
  
      // Renderizas la vista y pasas los datos como contexto
      res.render('/index.ejs', { autos });
    } catch (error) {
      // Manejo de errores
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  };
  
  export { obtenerDatosAutos };