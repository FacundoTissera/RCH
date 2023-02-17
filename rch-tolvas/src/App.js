
import React from "react";
import './assets/scss/base/base.scss'
// COMPONENTS
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/navBar/SideBar";
import Nosotros from "./components/main/Nosotros";
import Service from "./components/service/Service";
import Productos from "./components/productos/Productos";

  function App() {
    return (
      <>
        <NavBar />
        <SideBar />
        <Nosotros />
        <Productos />
        <Service />
      </>
    );
  }

export default App;
