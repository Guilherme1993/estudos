import React from "react"
import './cursoEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link } from "react-router-dom";

export default function CursoEditar() {
    let idBoolean = false;

    const [codigo, setCodigo] = useState(0);

    const [descricao, setDescricao] = useState('');
    const [duracao, setDuracao] = useState('');
    const [area, setArea] = useState('');
    const [periodo, setPeriodo] = useState('');
    const [facCod, setFacCod] = useState('');

    const { idCurso } = useParams();

    const [checked, setChecked] = useState(false);

    function IfCrud() {
        if (idCurso === 0) {

            idBoolean = true;
        }
    }

    useEffect(() => {
        async function getCurso() {
            if (idCurso == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/curso/' + idCurso);

                setCodigo(data[0].cur_codigo);

                setDescricao(data[0].cur_descricao);
                setDuracao(data[0].cur_duracao);
                setArea(data[0].cur_area);
                setPeriodo(data[0].cur_periodo);
                setFacCod(data[0].fac_codigo);


            }
        }
        IfCrud();
        getCurso();
    }, []);


    async function handleCurso(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        try {
            if (descricao.length === 0) {
                alert('Insira uma descrição válida')
            } else {
                if (idCurso == 0) {
                    await urlapi.post('curso', data)
                        .then(response => alert("Inserção"))
                } else {
                    await urlapi.put('/curso/' + idCurso, data)
                        .then(response => alert("Edição"))
                }
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--autor" onSubmit={handleCurso} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="cur_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Descrição do Curso</label>
                            <input type="text" className="form-control"
                                name="cur_descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Duracao Semestre </label>
                            <input type="text" className="form-control" name="cur_duracao"
                                id="cur_duracao"
                                value={duracao}
                                onChange={e => setDuracao(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Area </label>
                            <input type="text" className="form-control" name="cur_area"
                                id="cur_area"
                                value={area}
                                onChange={e => setArea(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Periodo </label>
                            <input type="text" className="form-control" name="cur_periodo"
                                id="cur_periodo"
                                value={periodo}
                                onChange={e => setPeriodo(e.target.value)}
                            />
                        </div>
                    </div>




                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Código da Faculdade </label>
                            <input type="text" className="form-control" name="fac_codigo"
                                id="fac_codigo"
                                value={facCod}
                                onChange={e => setFacCod(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/curso" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
