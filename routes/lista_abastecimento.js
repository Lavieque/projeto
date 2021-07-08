const express = require('express')
const router = express.Router()
const { sequelize } = require('../models/Db');
const { route } = require('./index');
const controller = require('../controller/controller_aba')
const axios = require('axios');
const Abastecimento = require('../models/Abastecimento')

router.get('/lista_abastecimento', function(req, res, next){
    axios.get('http://localhost:8000/lista_abastecimento/api/abastecimento')
        .then(function(response){
            res.render('lista_abastecimento', { abastecimento: "dados"});
        })
        .catch(err=>{
            res.send(err);
        })
    
} );


//router.post('/api/abastecimento', controller.create)
router.get('/api/abastecimento', controller.findAll);

module.exports = router;