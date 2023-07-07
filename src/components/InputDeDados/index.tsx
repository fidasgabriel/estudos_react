import React, { useState } from "react";
import * as ABC from "./styles.ts";

function InputDeDados() {
  const [valor, setValor] = useState();
  
  function troca(valorNovo) {
    setValor(valorNovo);
  }
  return (
    <>
      <ABC.InputEstilizado
        value={valor}
        type="text"
        onChange={(valor) => troca(valor.target.value)}
      />
      <p>{valor}</p>
    </>
  );
}

export default InputDeDados;
