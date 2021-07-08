const express = require('express')
const Participacao_acidente = require('../models/Participacao_acidente')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bodyParser = require('body-parser')

//router.get('/', function(req, res, next){
  //  res.render('maquina');
//} );



router.get('/', (req, res) => {
    res.render('participacao_acidente')
})


//Pocessamento de formulário e envio à base de dados(Abastecimento)
router.post('/acidente', function(req, res){
    //let alert = require('alert');
    Participacao_acidente.create({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        nr_interno: req.body.numinterno,
        equipamento: req.body.equipamento,
        idparticipacao_acidente: req.body.numparticipacao,
        horas: req.body.horas,
        quilometros: req.body.quilometros,
        descricao: req.body.descricao,
        data_acidente: req.body.data_acidente,
        hora_acidente: req.body.hora_acidente
      }).then(function(){
        req.flash('success', 'Registration successfully');
        console.log(req.body.data_acidente)
        res.redirect('/participacao_acidente');//res.send("Utilizador criado com sucesso")
        //alert("Participação registada com sucesso!")
        //JSAlert.alert("Abastecimento registado com sucesso!");
      }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
      })
})



module.exports = router;