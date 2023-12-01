import{AutosDB} from "../models/Categorias.js"

export const getCATEGORIA = async  (req,res) => {
try{    
    
    const Categorias = await AutosDB.findAll()
    res.json(Categorias)
} catch (error) {
    return res.status(500).json({message: error.message});

}
};


export const getCategorias = async (req, res) => {
    try{


    const {id} = req.params;
    const categorias = await AutosDB.findOne({
        where:{
            id,
              },
    });
    if(!categorias) return res.status(404).json({message: 'Categoria no existente.'});
    res.json(categorias)
}catch (error) {
    return res.status(500).json({message: error.message});
                }
};




export const createCategoria = async (req,res) => {
    
    const{tipoAuto, id} = req.body;
    
    try{

    const nuevaCategoria = await AutosDB.create({
        id,
        tipoAuto
    })
    

    res.json(nuevaCategoria);
}catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const updateCategoria = async (req,res) => {
    try{ 

        const {id} = req.params;
        const {tipoAuto} = req.body

        const categoria = await AutosDB.findByPk(id)
        categoria.tipoAuto = tipoAuto
        categoria.id = id    
        await categoria.save();
    
        res.json(categoria);
    }
    catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteCategoria = async (req,res) => {
    try{

            const {id} = req.params;
            await AutosDB.destroy({
            where : {
                id,
                    }, 
            });
            res.sendStatus(204)

            }catch (error){
                return res.status(500).json({message: error.message});
        }
};