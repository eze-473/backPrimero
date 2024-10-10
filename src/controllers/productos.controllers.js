import Producto from "../databasse/model/producto"

export const funcionPureba = (req,res,)=>{
    console.log("alguien molesta")
    res.send("hola probre alma desamparada")
}
export const crearProducto = async(req,res,)=>{
    try {
        //extraer el producto del body de la solicitud
        console.log(req)
        console.log(req.body)
        //validar
        //crear el objeto con el modelo del producto
        const Productonuevo= new Producto(req.body)
        //guardar en la BD
        await Productonuevo.save()
        //responder
        res.status(201).json({mensaje:"producto creado"})
    } catch (error) {
        console.error(error)
        res.status(500).json({gatito:"error ocurriendo en este proceso"})
        
    }
}
export const listarProductos = async(req,res,)=>{
    try {
      
        //pedir a la BD la lista de prductos
        const ListaProductos = await producto.find()
        await Productonuevo.save()
        //responder
        res.status(200).json(ListaProductos)
    } catch (error) {
        console.error(error)
        res.status(500).json({gatito:"error ocurriendo en este proceso"})
        
    }
}
export const editarProducto = async(req,res) =>{
try {
    console.log(req.params.id)
        //validar datos del body
        //buscar producto existe
        const porductoBuscado = await Producto.finBiId(req.params.id) 
        //en caso de que no existe 404
        if(!porductoBuscado){
            return res.status(404).jsno({mensaje:" no se encontro el producto"})
        }
        //si se encontro se edita
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        //envia respuesta al front
        res.status(200).json({mensaje:"el producto fue editado correctamente"})
} catch (error) {
    console.error(error)
    res.status(500).json({gatito:"error ocurriendo en este proceso"})
}
}
export const BorrarProducto = async(req,res) =>{
    try {
        const productoBUscado = await Producto.findById(req.params.id)
        if(!productoBUscado){
            return res.status(404)
        }
        await Producto.findByIdAndDelete(req.paramas.id)
            res.status(200).json({mensaje:"el producto fue borrado correctamente"})
        
    } catch (error) {
        const productoBuscado = await Producto.findById()
    
    }
}
export const obtenerProducto = (req,res) =>{
    try {
        if(!productoBuscado){
            return res.status(404).jsno({mensaje:" no se encontro el producto"})
            
        }
        res.status(200).json(productoBuscado)
    } catch (error) {
        
    }
}