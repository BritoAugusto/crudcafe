import Menu from "./componentes/commons/Menu";
import Footer from "./componentes/commons/Footer";
import Inicio from "./componentes/pages/inicio";
import Administrador from "./componentes/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormularioProducto from "./componentes/producto/FormularioProducto";
import Error404 from "./componentes/pages/Erro404";
import DetalleProducto from "./componentes/pages/DetalleProducto";
import Login from "./componentes/pages/Login";

function App() {
  return (
    <>
      {/* <Menu></Menu>  */}
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador> */}
      {/* <Footer></Footer>  */}
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
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
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
