import React from "react"
import './curso.css';


import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaCurso";

import { useEffect, useState } from 'react';

function Curso() {
  const [curso, setCurso] = useState([])


  useEffect(() => {
    urlapi.get('curso')
      .then(response => response.data)
      .then(response => setCurso(response));

  }, []
  )

  return (
    <>
      <div id="idCurso" className="curso">
        <div id="corpo_rel">
          <legend> Registros de Cursos Cadastrados</legend>

          <div>

            <Tabela
              items={curso}
              chave={'/curso/'}
            />

          </div>
        </div>
      </div>
    </>
  );
}

export default Curso;

