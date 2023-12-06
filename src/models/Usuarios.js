import { DataTypes } from "sequelize";
import{sequelize} from '../database/database.js'

export const Usuarios = sequelize.define('Personas', {
    id:{
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    name:{
        type : DataTypes.STRING,
        allowNull : false
    },
    lastname:{
        type : DataTypes.BIGINT,
        allowNull   : false
    },
    edad :{
        type : DataTypes.STRING,
        allowNull   : false

    },
    correo :{
        type : DataTypes.STRING
    },
    passwword :{
        type : DataTypes.STRING
    },

},
    {
        timestamps: true 



});
export default Autos3;