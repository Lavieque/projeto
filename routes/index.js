const express = require('express')
const Abastecimento = require('../models/Abastecimento')
const router = express.Router()
const axios = require('axios')
const { sequelize } = require('../models/Db')
const controller = require('../controller/controller_aba')
router.get('/', function(req, res, next){
    res.render('index');
} );

router.get('/index', (req, res) => {
    res.render('index')
});




/*
//Pocessamento de formulário e envio à base de dados(Abastecimento)
router.post('/add', function(req, res){
    //let alert = require('alert');
      Abastecimento.create({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        marcacao_antes: req.body.marcacao_antes,
        marcacao_depois: req.body.marcacao_depois,
        litros_abastecidos: req.body.litros_abastecidos,
        idlocal_abastecimento: req.body.estaleiro
      }).then(function(){
        res.redirect('/');//res.send("Utilizador criado com sucesso")
        //alert("Abastecimento registado com sucesso!")
        //JSAlert.alert("Abastecimento registado com sucesso!");
      }).catch(function(erro){
        res.send("Houve um erro: "+ erro)
      })
})

router.get('/api/abastecimento', abastecimentoController.find)*/

//sequelize.query("SELECT * FROM `abastecimento`", { type: sequelize.QueryTypes.SELECT})
 // .then(function(abastecimento,req, res) {
    // We don't need spread here, since only the results will be returned for select queries
    //console.log(abastecimento)
    //res.render('lista_abastecimento', {abastecimento:abastecimento})
  //})

/*
router.get('/select', function(req, res, next){
  sequelize.query('SELECT * FROM abastecimento', function(err, rs){
    res.render('lista_abastecimento', {abastecimento: rs})
  })
})
*/

router.post('/api/abastecimento', controller.create)

module.exports = router;
  