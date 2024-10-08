import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { buscarProductoAPI } from "../../helpers/queries";
import { Col } from "react-bootstrap";
const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  
  useEffect(() => {
    const mostrarProductos = async () => {
      const data = await buscarProductoAPI(id);
      const productos = await data.json();
      setProducto(productos);
    };
    mostrarProductos();
  }, []);

  return (
    <Col md={4} lg={3} className="mb-3 m-auto">
      <Card className="h-100 text-center">
        <div>
          <img
            src={producto.imagen}
            alt={producto.nombreProducto}
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text>
            <p className="fw-bold"> {producto.categoria}</p>
            {producto.descripcion_amplia}
            <br className="mb-2" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
            <span className="fw-bold ">${producto.precio}</span>
          
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default DetalleProducto;
