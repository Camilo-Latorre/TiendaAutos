// loggerMiddleware.js
import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

export default async (req, res, next) => {
  const now = new Date();
  
  // Obtén la ruta del archivo actual
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // Combina la ruta con el nombre del archivo de log
  const logFilePath = path.join(__dirname, 'log.log');

  const log = `${now.toISOString()} [${req.method}] ${req.path}\n`;

  try {
    await fsPromises.writeFile(logFilePath, log, { flag: 'a' });
    next();
  } catch (error) {
    console.error('Error al escribir en el archivo de registro:', error);
    next();
  }
};