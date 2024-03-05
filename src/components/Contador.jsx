import { useState } from "react";

const Contador = () => {
    const [numero, setNumero] = useState(10);

    return (
        <article className="text-center">
        <h2>Contador</h2>
        <h3>{numero}</h3>
        <button
          className="btn btn-primary me-2"
          onClick={() => setNumero(numero + 1)}
        >
          +1
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setNumero(numero - 1)}
        >
          -1
        </button>
      </article>
    );
};

export default Contador;