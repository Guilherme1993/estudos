const conexao = require('../../config/conexao');

module.exports = {
    cursoGetAll,
    cursoGetById,
    cursoNovo,
    cursoEditar,
}


function cursoGetAll(req, res) {
    conexao.query('select * from curso', (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })

}

function cursoGetById(req, res) {
    let cod = req.params.id;
    conexao.query('select * from curso where cur_codigo = ?', [cod], function (err, resposta) {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function cursoNovo(req, res) {
    let dados = req.body;
    dados.cur_codigo = null;
    conexao.query('insert into curso set ? ', [dados], function (err, resposta) {
        if (err) {
            throw err;
        }
        else {
            res.json(resposta);
        }
    })
}


function cursoEditar(req, res) {
    let dados = req.body;
    const sql = "update  curso set cur_descricao = '" + dados.cur_descricao +
        "', cur_duracao = '" + dados.cur_duracao +
        "', cur_aera = '" + dados.cur_area +
        "', cur_periodo = '" + dados.cur_periodo +
        "', fac_codigo = '" + dados.fac_codigo +
        "' where cur_codigo = '" + dados.cur_codigo + "'"
    conexao.query(sql, function (err, resposta) {
        if (err) {
            throw err;
        } else {
            res.json(resposta)
        }
    });
}


