import React from "react"
import './faculdadeEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link } from "react-router-dom";

export default function FaculdadeEditar() {
    let idBoolean = false;

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [diretor, setDiretor] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const [checked, setChecked] = useState(false);

    const { idFaculdade } = useParams();

    function IfCrud() {

        if (idFaculdade === 0) {
            idBoolean = true;
        }

    }

    useEffect(() => {
        async function getFaculdade() {
            if (idFaculdade == 0) {
                setChecked(true);
            } else {
                const { data } = await urlapi.get('/faculdade/' + idFaculdade);

                setCodigo(data[0].fac_codigo);

                setNome(data[0].fac_nome);
                setApelido(data[0].fac_apelido);
                setDiretor(data[0].fac_diretor);
                setCidade(data[0].fac_cidade);
                setEstado(data[0].fac_estado);


            }
        }
        IfCrud();
        getFaculdade();
    }, []);


    async function handleFaculdade(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                if (idFaculdade == 0) {
                    await urlapi.post('faculdade', data)
                        .then(response => alert("Inserção"))
                } else {
                    await urlapi.put('/faculdade/' + idFaculdade, data)
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

                <form className="form--autor" onSubmit={handleFaculdade} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="fac_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome da Faculdade </label>
                            <input type="text" className="form-control"
                                name="fac_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="fac_apelido"
                                id="fac_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Diretor </label>
                            <input type="text" className="form-control" name="fac_diretor"
                                id="fac_diretor"
                                value={diretor}
                                onChange={e => setDiretor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Cidade </label>
                            <input type="text" className="form-control" name="fac_cidade"
                                id="fac_cidade"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Estado </label>
                            <input type="text" className="form-control" name="fac_estado"
                                id="fac_estado"
                                value={estado}
                                onChange={e => setEstado(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" className="button-save-marca">Salvar</button>
                        <Link to="/faculdade" className="button-return-marca" >Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
