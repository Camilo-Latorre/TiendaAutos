import { Autos3 } from "../models/Categoria3.js"


export const ObtenerCoche = async (req, res) => {
    try{

     const Autos4x4 = await Autos3.findAll();
     res.render(Autos4x4)
}catch (error){
    return res.status(500).json({message: error.message});

}
};

export const crearAuto = async (req, res) => {
    const {name, price, marca, AutoID} = req.body

    const nuevoAuto4x4 = await Autos3.create({
        name,
        price,
        marca,
        AutoID
    })

    res.json(nuevoAuto4x4)


};

export const updateAuto = async (req, res) => {
    const {id} = req.params;
    const auto = await Autos3.findOne({
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
export const ObtenerAuto4x4 = async (req, res) => { 
    
    try{
        const {id} = req.params;
        const auto = await Autos2.findOne({
            where:{
                id
            }
        })
        if(!auto) return res.status(404).json({message: 'Auto no existente.'});
            res.json(auto)
    }catch (error) {

            }
    };