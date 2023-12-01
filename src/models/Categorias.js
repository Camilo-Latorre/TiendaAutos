import {DataTypes} from "sequelize";
import{sequelize} from '../database/database.js'
import{Autos1} from './Categoria1.js'

export const AutosDB = sequelize.define('ParcialFinal',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipoAuto: {
        type: DataTypes.STRING,
        allowNull: false
        },
    }, 
        {
        timestamps: true    
});

AutosDB.hasMany(Autos1,{
    foreignKey: 'AutoID',
    sourceKey: 'id',  

})

Autos1.belongsTo(AutosDB,{
    foreignKey: 'AutoID',
    targetId: 'id',
})
