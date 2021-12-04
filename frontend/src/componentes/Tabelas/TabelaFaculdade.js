import React from 'react';

import './Tabelas.css';

export default function TabelaFaculdade(props) {

  function getLinhas() {

    const arrayRegistros = props.items;

    return arrayRegistros.map((item, i) => {

      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.fac_codigo}>
          <td> {item.fac_codigo} </td>
          <td> {item.fac_nome} </td>
          <td> {item.fac_apelido} </td>
          <td> {item.fac_diretor} </td>
          <td> {item.fac_cidade} </td>
          <td> {item.fac_estado} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.fac_codigo} > Editar </a></td>
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
            <th scope="col"> Nome </th>
            <th scope="col"> Apelido </th>
            <th scope="col"> Diretor </th>
            <th scope="col"> Cidade</th>
            <th scope="col"> Estado </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Nova Faculdade</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}