import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";
import Contador from "./components/Contador";

function App() {

  return (
    <section className="container">
      <h1 className="display-3 text-center my-3">Contador con React</h1>
      <TituloSecundario></TituloSecundario>
      <Contador></Contador>
    </section>
  )
}

export default App
