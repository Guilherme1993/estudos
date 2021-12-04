import React from 'react';

import './Tabelas.css';

export default function TabelaCurso(props) {

  function getLinhas() {

    const arrayRegistros = props.items;

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.cur_codigo}>
          <td> {item.cur_codigo} </td>
          <td> {item.cur_descricao} </td>
          <td> {item.cur_duracao} </td>
          <td> {item.cur_area} </td>
          <td> {item.cur_periodo} </td>
          <td> {item.fac_codigo} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.cur_codigo} > Editar </a></td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'left' }}>
            <th scope="col"> Código </th>
            <th scope="col"> Descrição </th>
            <th scope="col"> Duração </th>
            <th scope="col"> Area </th>
            <th scope="col"> Periodo </th>
            <th scope="col"> Cod. Faculdade. </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Curso</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}