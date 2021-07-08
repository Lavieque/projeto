const Abastecimento = require('../models/Abastecimento')
const { sequelize } = require('../models/Db')
const Db = require('../models/Db')
const Op = Db.Sequelize.Op;


//Inserir dados 
exports.create = (req, res)=>{

    if(!req.body){
        res.status(400).send({message:"Não pode enviar vázio"});
        return;
    }

    const abastecimento = new Abastecimento ({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        marcacao_antes: req.body.marcacao_antes,
        marcacao_depois: req.body.marcacao_depois,
        litros_abastecidos: req.body.litros_abastecidos,
        idlocal_abastecimento: req.body.estaleiro
    })

    abastecimento
        .save(abastecimento)
        .then(data =>{
            res.redirect('/index')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "correu um erro ao criar"
            })
        })
}

//Select dos registos
/*
exports.find = (req, res)=>{
    if(req.query.id){
        const id = req.query.id;

        Abastecimento.findByPk(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "Não foi encontrada viatura com id"+id})
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message:"Erro ao procurar viatura com id"+id})
            })
    }else{
     Abastecimento.findAll()
        .then(abastecimento => {
        res.send(abastecimento)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Aconteceu um erro ao procurar informação"})
    })
    }
    
}*/
exports.findAll = (req, res) => {
    const id = req.query.id;
    const condition = id? {id: { [Op.like]: '%${id}%' } } : null;

    Abastecimento.findAll({ where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Ocorreu um erro ao procura os registos"});
        })
};

//Select de um registo
exports.findOne = (req, res) => {
    const id = req.params.id;

    Abastecimento.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message:  "Ocorreu um erro ao procura o registo com id"+id});
        })
};