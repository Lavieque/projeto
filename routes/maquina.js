const express = require('express')
const Maquina = require('../models/Maquina')
const router = express.Router()
const maquina_controller = require('../controller/maquina.controller')

//router.get('/', function(req, res, next){
  //  res.render('maquina');
//} );

router.get('/', (req, res) => {
    res.render('maquina')
})

/*
//Pocessamento de formulário e envio à base de dados(Abastecimento)
router.post('/registo_maquina', function(req, res){
    let alert = require('alert');
      Maquina.create({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        nr_serie: req.body.nr_serie,
        idmaquina: req.body.nr_interno,
        idtipo_equipamento: 1
      }).then(function(){
        res.redirect('/maquina');//res.send("Utilizador criado com sucesso")
        alert("Abastecimento registado com sucesso!")
        //JSAlert.alert("Abastecimento registado com sucesso!");
      }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
      })
      
})*/
router.post('/api/maquina', maquina_controller.create);

module.exports = router;