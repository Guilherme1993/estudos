import React from 'react';
import { Switch, Route } from 'react-router-dom';

import faculdade from '../Faculdade/faculdade';
import faculdadeEditar from '../Faculdade/faculdadeEditar';
import curso from '../Curso/curso';
import cursoEditar from '../Curso/cursoEditar'

import './AreaDados.css';

export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/faculdade" component={faculdade}></Route>
        <Route exact path="/faculdade/:idFaculdade" component={faculdadeEditar}></Route>

        <Route exact path="/curso" component={curso}></Route>
        <Route exact path="/curso/:idCurso" component={cursoEditar}></Route>



      </Switch>

    </div>
  );
}

