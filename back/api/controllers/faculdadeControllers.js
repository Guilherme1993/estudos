const conexao = require('../../config/conexao');

module.exports = {
    faculdadeGetAll,
    faculdadeGetById,
    faculdadeNovo,
    faculdadeEditar,
}


function faculdadeGetAll(req, res) {
    console.log("Rota encontrada")
    const sql = 'select * from faculdade';
    conexao.query(sql, (err, resposta) => {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })

}

function faculdadeGetById(req, res) {
    let cod = req.params.id;
    conexao.query('select * from faculdade where fac_codigo = ?', [cod], function (err, resposta) {
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function faculdadeNovo(req, res) {
    let dados = req.body;
    dados.fac_codigo = null;
    conexao.query('insert into faculdade set ? ', dados, function (err, resposta) {
        if (err) {
            throw err;
        }
        else {
            res.json(resposta);
        }
    })
}


function faculdadeEditar(req, res) {
    let dados = req.body;
    const sql = "update faculdade set fac_nome =' " + dados.fac_nome +
        "', fac_apelido = '" + dados.fac_apelido +
        "', fac_diretor = '" + dados.fac_diretor +
        "', fac_cidade = '" + dados.fac_cidade +
        "', fac_estado = '" + dados.fac_estado +
        "' where fac_codigo = '" + dados.fac_codigo + "'"
    conexao.query(sql, function (err, resposta) {
        if (err) {
            throw err;
        } else {
            res.json(resposta)
        }
    });
}


