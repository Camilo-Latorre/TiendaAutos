import nodemailer from 'nodemailer';
import Autos1 from '../models/Categoria1.js';

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    secure: false,
    auth: {
      user: 'a5219cbb97cb4d',
      pass: 'ef8223176350aa',
    },
  });
  
  // Define la función para enviar el correo
  export const enviarCorreo = async () => {
    try {
      // Crea una instancia de Autos1
      const auto = await Autos1.findOne(/* condiciones de búsqueda */);
  
      // Lógica para enviar el correo
      const info = await transporter.sendMail({
        from: 'cristian.osorio6945@ucaldas.edu.co',
        to: 'destinatario@gmail.com',
        subject: 'Registro auto nuevo',
        text: `Ha registrado un auto nuevo\nNombre: ${auto.name}\nPrecio: ${auto.price}\nMarca: ${auto.marca}`
      });
  
      console.log('Correo enviado:', info.messageId);
    } catch (error) {
      console.error('Error al enviar el correo:', error);
    }
  };

  export default enviarCorreo;