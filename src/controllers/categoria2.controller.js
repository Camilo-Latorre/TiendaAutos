import { Autos2 } from "../models/Categoria2.js"


export const ObtenerAuto = async (req, res) => {
    try{

     const AutosClasico = await Autos2.findAll();
     res.render('index.ejs', {Autos2 : AutosClasico})
}catch (error){
    return res.status(500).json({message: error.message});

}
};

export const crearAuto = async (req, res) => {
    const {name, price, marca, AutoID} = req.body

    const nuevoAutoClasico = await Autos2.create({
        name,
        price,
        marca,
        AutoID
    })

    res.render(nuevoAutoClasico)


};

export const updateAuto = async (req, res) => {
    const {id} = req.params;
    const auto = await Autos2.findOne({
        where: {
            id
        }
    })
    auto.set(req.body);
    await auto.save();
    return res.json(auto);
};

export const deleteAuto = async (req, res) => {
    const {id} = req.params;
    try{
        const resultado = await Autos2.destroy({
            where:{
                id
            }
        })
            console.log(resultado)
            return res.sendStatus(204)
    }catch (error) {
            return res.sendStatus(500).json({message: error.message});
            }

};

export const ObtenerAutoClasico = async (req, res) => { 
    
    try{
        const {id} = req.params;
        const auto = await Autos2.findOne({
            where:{
                id
            }
        })
        if(!auto) return res.status(404).json({message: 'Auto no existente.'});
            res.render(auto)
    }catch (error) {

            }
    };