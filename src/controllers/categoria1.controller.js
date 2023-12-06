import { Autos1 } from "../models/Categoria1.js"


export const ObtenerAutoDepor = async (req, res) => {
    try{

     const AutosDeportivo = await Autos1.findAll();
     res.render(AutosDeportivo)
}catch (error){
    return res.status(500).json({message: error.message});

}
};

export const crearAuto = async (req, res) => {
    const {name, price, marca, AutoID} = req.body

    const nuevoAutoDeportivo = await Autos1.create({
        name,
        price,
        marca,
        AutoID
    })

    res.json(nuevoAutoDeportivo)


};

export const updateAuto = async (req, res) => {
    const {id} = req.params;
    const auto = await Autos1.findOne({
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
        const resultado = await Autos1.destroy({
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

export const ObtenerAutoDeportivo = async (req, res) => { 
    
    try{
        const {id} = req.params;
        const auto = await Autos1.findOne({
            where:{
                id
            }
        })
        if(!auto) return res.status(404).json({message: 'Auto no existente.'});
            res.json(auto)
    }catch (error) {

            }
    };
