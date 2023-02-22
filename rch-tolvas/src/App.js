
import React from "react";
import './assets/scss/base/base.scss'
// COMPONENTS
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/navBar/SideBar";
import Nosotros from "./components/main/Nosotros";
import Service from "./components/service/Service";
import Productos from "./components/productos/Productos";
import Ubicacion from "./components/ubicacion/Ubicacion";
import Fotos from "./components/fotos/Fotos";
import Contacto from "./components/contacto/Contacto";
import Footer from "./components/footer/Footer";

  function App() {
    return (
      <>
        <NavBar />
        <SideBar />
        <Nosotros />
        <Productos />
        <Service />
        <Ubicacion />
        <Fotos />
        <Contacto />
        <Footer />
      </>
    );
  }

export default App;
