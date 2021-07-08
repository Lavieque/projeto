const express = require('express')
const Participacao_manutencao = require('../models/Participacao_manutencao')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bodyParser = require('body-parser')

//router.get('/', function(req, res, next){
  //  res.render('maquina');
//} );



router.get('/', (req, res) => {
    res.render('participacao_manutencao')
})


//Pocessamento de formulário e envio à base de dados(Abastecimento)
router.post('/manutencao', function(req, res){
    //let alert = require('alert');
    Participacao_manutencao.create({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        nr_interno: req.body.numinterno,
        tipo_equipamento: req.body.equipamento,
        idparticipacao_manutencao: req.body.numparticipacao,
        horas: req.body.horas,
        quilometros: req.body.quilometros,
        descricao: req.body.descricao
      }).then(function(){
        req.flash('success', 'Registration successfully');
        res.locals.message = req.flash();
        res.redirect('/participacao_manutencao');//res.send("Utilizador criado com sucesso")
        //alert("Participação registada com sucesso!")
        //JSAlert.alert("Abastecimento registado com sucesso!");
      }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
      })
})



module.exports = router;