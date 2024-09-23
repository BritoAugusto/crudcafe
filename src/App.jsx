import Menu from "./componentes/commons/Menu"
import Footer from "./componentes/commons/Footer"
import Inicio from "./componentes/pages/inicio"
import Administrador from "./componentes/pages/Administrador"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormularioProducto from "./componentes/producto/FormularioProducto";
import Error404 from "./componentes/pages/Erro404";
import DetalleProducto from "./componentes/pages/DetalleProducto";

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
       </Routes>
       <Footer></Footer>
       </BrowserRouter>
    
    </>
  )
}

export default App
