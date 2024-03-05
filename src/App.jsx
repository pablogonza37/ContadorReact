import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";
import Contador from "./components/Contador";

function App() {
  const anioActual = 2024;
  return (
    <section className="container">
      <h1 className="display-3 text-center my-3">Contador con React</h1>
      <TituloSecundario comision='c73i' anioActualProps={anioActual}></TituloSecundario>
      <Contador></Contador>
    </section>
  )
}

export default App
