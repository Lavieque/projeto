const express = require('express')
const Seguro = require('../models/Seguro')
const router = express.Router()
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const { sequelize } = require('../models/Db')
//const bodyParser = require('body-parser')

//const Swal = require('sweetalert2')
//import swal from 'sweetalert';
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', (req, res) => {
  
    res.render('seguro')
})

router.get('/', function(req, res){
  Seguro.all().then(function(seguro){
    console.log(seguro)
    res.render('seguro', {seguro: seguro})
  })
})


//Pocessamento de formulário e envio à base de dados(Abastecimento)
router.post('/seguro', function(req, res){
    //let alert = require('alert');
      
    Seguro.create({
        nome_marca: req.body.nome_marca,
        matricula: req.body.matricula,
        nr_interno: req.body.numinterno,
        idtipo_equipamento: req.body.equipamento,
        modelo: req.body.modelo,
        data_validade: req.body.data_validade,
        apolice: req.body.apolice,
      }).then(function(){
        
        res.redirect('/seguro');//res.send("Utilizador criado com sucesso")
        
      })//.catch(function(erro){
        //res.send("Houve um erro: "+ erro)
      //})
});

//sequelize.query('SELECT * FROM seguro', (err,rows) => {
  //if(err) throw err;

  //console.log('Data received from Db:');
  //console.log(rows);
//});
//sequelize.query("SELECT * FROM `seguro`", { type: sequelize.QueryTypes.SELECT})
  //.then(function(seguro) {
    // We don't need spread here, since only the results will be returned for select queries
    //console.log(seguro)
  //})



module.exports = router;