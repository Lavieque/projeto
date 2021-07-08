const express = require('express')
const Viatura = require('../models/Viatura')
const router = express.Router()
const { sequelize } = require('../models/Db')
const controller = require('../controller/controller')

router.get('/viatura', function(req, res, next){
    res.render('viatura');
} );
/*
router.post('/adde', function(req, res,){
    let alert = require('alert');
    Viatura.create({
      nome_marca: req.body.nome_marca,
      matricula: req.body.matricula,
      nr_quadro: req.body.nr_quadro,
      idviatura: req.body.nr_interno,
      categoria: req.body.categoria,
      idtipo_equipamento: 2
      
    }).then(function(){
      res.redirect('/viatura');//res.send("Utilizador criado com sucesso")
      alert("Viatura registado com sucesso!")
      //JSAlert.alert("Abastecimento registado com sucesso!");
    }).catch(function(erro){
      res.send("Houve um erro: "+ erro)
    })   
   
    
})*/

//sequelize.query("SELECT * FROM `viatura`", { type: sequelize.QueryTypes.SELECT})
  //.then(function(viatura) {
    // We don't need spread here, since only the results will be returned for select queries
    //console.log(viatura)
    //res.render('lista_viatura', {viatura:viatura})
  //})
  //router.get('/', (req, res)=> {
    //sequelize.query('SELECT * FROM viatura', (error,results) => {
      //if(error){
      //  throw error;
      //} else{
     //   res.render('lista_viatura', { results:"esta tudo"})
     // }

    
   // });
//});

router.post('/api/viatura', controller.create)
module.exports = router;