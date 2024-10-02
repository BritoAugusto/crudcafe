import { Container, Row } from "react-bootstrap";
import CardProducto from "../producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductoApi } from "../../helpers/queries";
import Swal from "sweetalert2";

const Inicio = () => {
const [productos, setProductos] = useState([]);

 useEffect(() => {
   obtenerProductos();
 }, []);

const obtenerProductos = async () => {
  const respuesta = await leerProductoApi();
  if (respuesta.status === 200) {
    const datos = await respuesta.json();
    setProductos(datos);
  } else {
    Swal.fire({
      title: "Ocurrio un error",
      text: "En estos momentos no podemos mostrar la lista de productos, intentá nuevamente más tarde",
      icon: "error",
    });
  }
};

  return (
    <>
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo cafe"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
          {productos.map((producto, index) => (
            <CardProducto key={index} producto={producto}></CardProducto>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
