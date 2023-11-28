import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import './App.css'
import Productos from "./components/Productos/Productos";
import Seccionqs from "./components/Seccionqs/Seccionqs";
import Contacto from "./components/Contacto/Contacto";
import Puntos from "./components/Puntos/Puntos";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="degrade-blanco"/>
      <Header/>
      <Nav/>

      </div>
      <Productos/>
      <Seccionqs/>
      <Contacto/>
      <Puntos/>
      <Footer/>
      

    </div>

  );
}

export default App;
