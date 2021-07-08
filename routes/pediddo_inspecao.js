const express = require('express')
const Pedido_inspecao = require('../models/Pedido_inspecao')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bodyParser = require('body-parser')

//router.get('/', function(req, res, next){
  //  res.render('maquina');
//} );



router.get('/', (req, res) => {
    res.render('pedido_inspecao')
})


//Pocessamento de formulário e envio à base de dados(Abastecimento)
router.post('/pedido_inspecao', function(req, res){
    //let alert = require('alert');
    Pedido_inspecao.create({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        nr_interno: req.body.numinterno,
        equipamento: req.body.equipamento,
        idpedido_inspecao: req.body.numparticipacao,
        quilometros: req.body.quilometros,
        descricao: req.body.descricao,
        data_inspecao: req.body.data_inspecao,
      }).then(function(){
        req.flash('success', 'Registration successfully');
        res.redirect('/pedido_inspecao');//res.send("Utilizador criado com sucesso")
        //alert("Participação registada com sucesso!")
        //JSAlert.alert("Abastecimento registado com sucesso!");
      }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
      })
})



module.exports = router;