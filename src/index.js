import app from './app.js';
import {sequelize} from "./database/database.js";
import enviarCorreo from './controllers/correos.js';


enviarCorreo();

async function main() {
try {
    await sequelize.sync({force :false})
    app.listen(3000);
    console.log("Servidor esta corriendo en el puerto", 3000);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();