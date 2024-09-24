const URLProducto= import.meta.env.VITE_API_PRODUCTO;
//Peticiones o solicitudes

//GET
export const leerProductoApi = async()=>{
    try {
        const respuesta = await fetch(URLProducto)
        return respuesta
    } catch (error) {
        console.error(error)
        return false;
    }
}
//PUT O PATH

export const buscarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URLProducto+'/'+id);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//DELETE

export const borrarProductoApi = async (id) => {
  try {
    const respuesta = await fetch(URLProducto+'/'+id, {
      method: "DELETE"
    });

    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.error(error);
    return false;
  }
};


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
    return false;
}
}