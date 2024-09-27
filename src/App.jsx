import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from "./componentes/commons/Menu";
import Footer from "./componentes/commons/Footer";
import Inicio from "./componentes/pages/Inicio";
import Error404 from "./componentes/pages/Erro404";
import DetalleProducto from "./componentes/pages/DetalleProducto";
import Login from "./componentes/pages/Login";
import RutaProtegida from "./componentes/routes/RutaProtegida";
import RutasAdmin from "./componentes/routes/RutasAdmin";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("userKey")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/detalleProducto"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
          ></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <RutaProtegida>
                <RutasAdmin></RutasAdmin>
              </RutaProtegida>
            }
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
