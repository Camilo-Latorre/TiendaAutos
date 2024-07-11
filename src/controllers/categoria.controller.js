import{AutosDB} from "../models/Categorias.js"

export const GetCategoria = async (req,res) => {
    const categoriaSeleccionada = req.query.categoria;

    //const autosFiltrados = obtenerAutosPorCategoria(categoriaSeleccionada);
  
    //res.render(autosFiltrados);
  };


  export async function obtenerAutosPorCategoria(autosFiltrados) {
    try {
      const autosFiltrados = await AutosDB('SELECT * FROM autos WHERE autoTipo = $1', null);
      return autosFiltrados;
    } catch (error) {
      console.error('Error al obtener autos por categoría:', error);
      throw error;
    }
  }
  

  

export const getCATEGORIA = async  (req,res) => {
try{    
    
    const Categorias = await AutosDB.findAll()
    res.render('index.ejs',{AutosDB: Categorias})
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
    res.render(categorias)
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

