import Administrador from "../pages/Administrador";
import FormularioProducto from "../producto/FormularioProducto";
import { Route, Routes } from "react-router-dom";
const RutasAdmin = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        exact
        path="/crear"
        element={
          <FormularioProducto
            titulo="Nuevo producto"
            creandoProducto={true}
          ></FormularioProducto>
        }
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={
          <FormularioProducto
            titulo="Editar producto"
            creandoProducto={false}
          ></FormularioProducto>
        }
      ></Route>
    </Routes>
  );
};

export default RutasAdmin;
