import Administrador from "../pages/Administrador";
import FormularioProducto from "../producto/FormularioProducto";
import { Route, Routes } from "react-router-dom";
const RutasAdmin = () => {
    return (
      <Routes>
        <Route
          exact
          path="/administrador"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administrador/crear"
          element={
            <FormularioProducto
              titulo="Nuevo producto"
              creandoProducto={true}
            ></FormularioProducto>
          }
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
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