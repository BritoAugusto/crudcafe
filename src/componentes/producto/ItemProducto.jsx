import { Button } from "react-bootstrap";
import { borrarProductoApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemProducto = ({producto, fila}) => {

  const borrarProducto = ()=>{
Swal.fire({
  title: "¿Estás seguro de borrar el producto?",
  text: "No puedes revertir esta operacion",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Borrar",
  cancelButtonText : "Cancelar"
}).then(async(result) => {
  if (result.isConfirmed) {
    //pedir a la api borrar el producto
    const respuesta = await borrarProductoApi(producto.id)
    if(respuesta.status === 200){
      Swal.fire({
        title: "Eliminado",
        text: `El producto ${producto.nombreProducto} fue elminado`,
        icon: "success",
      });

    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `El producto ${producto.nombreProducto} no pudo ser eliminado, intenta de nuevo en unos minutos`,
        icon: "error",
      });
    }
  }
});
 }

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          className="img-thumbnail"
          alt={producto.nombreProducto}
        ></img>
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
