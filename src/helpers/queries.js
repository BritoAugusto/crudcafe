const URLProducto= import.meta.env.VITE_API_PRODUCTO;
//Peticiones o solicitudes

//GET
//PUT O PATH
//DELETE

//POST 
export const crearProductoApi = async(productoNuevo)=>{
try {
    const respuesta = await fetch(URLProducto,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(productoNuevo)
    })

    console.log(respuesta)
    return respuesta;
    
} catch (error) {
    console.error(error)
}
}