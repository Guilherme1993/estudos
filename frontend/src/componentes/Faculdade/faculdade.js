import React from "react";
import './faculdade.css';


import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaFaculdade";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Faculdade() {
  const [faculdade, setFaculdade] = useState([])

  
  useEffect(() => {
    urlapi.get('faculdade')
      .then(response => response.data) 
      .then(response => setFaculdade(response));
  }, []
  )

  return (
    <>
        <div id="idFaculdade" className="faculdade">
          <div id="corpo_rel">
            <legend> Registros de Faculdades Cadastradas</legend>
            

            <div>

              <Tabela
                items={faculdade}
                chave={'/faculdade/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Faculdade;

