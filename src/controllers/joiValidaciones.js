import Joi from 'joi';
import {Autos1} from 'models/Cayegoria1.js';

// Define el esquema de validación para tu modelo
const autos1Schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  price: Joi.number().integer().min(0).required(),
  marca: Joi.string().min(3).max(50).required(),
  correo: Joi.email().required(),
});

// Función de validación 
const validarDatos = (datos, schema) => {
  return schema.validateAsync(datos, { abortEarly: false });
};

// Métodos del controlador
export const crearAuto = async (req, res) => {
  try {
    // Validar los datos del cuerpo de la solicitud
    await validarDatos(req.body, autos1Schema);

    // Lógica para crear el auto
    const nuevoAuto = await Autos1.create(req.body);

    // Envía una respuesta exitosa
    res.status(201).json({ mensaje: 'Auto creado exitosamente', auto: nuevoAuto });
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const errores = error.errors.map((err) => ({
        campo: err.path,
        mensaje: err.message,
      }));
      res.status(400).json({ errores });
    } else {
      // Otro tipo de errores
      console.error('Error en la creación del auto:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  }
};
// Método para actualizar un auto
export const updateAuto = async (req, res) => {
  try {
    // Validar los datos del cuerpo de la solicitud
    await validarDatos(req.body, autos1Schema);

    // Lógica para actualizar el auto
    // Envía una respuesta exitosa
    res.status(200).json({ mensaje: 'Auto actualizado exitosamente' });
  } catch (error) {
    // Captura y manejo de errores de validación
    if (error.isJoi) {
      const errores = error.details.map((detalle) => ({
        campo: detalle.context.key,
        mensaje: detalle.message,
      }));
      res.status(400).json({ errores });
    } else {
      // Otro tipo de errores
      console.error('Error en la actualización del auto:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  }
};