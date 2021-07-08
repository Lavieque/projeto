const express = require('express')
const router = express.Router()
const { sequelize } = require('../models/Db');
const { route } = require('./maquina');
const axios = require('axios');
const Maquina = require('../models/Maquina')
const maquina_controller = require('../controller/maquina.controller')

router.get('/lista_maquina', (req, res) => {
    axios.get('http://localhost:8000/lista_maquina/api/maquina')
        .then(function(response){
            res.render('lista_maquina', {maquina: response.data});
        })
        .catch(err => {
            res.send(err);
        })
    
})

router.get('/atualizar_maquina', (req, res) => {
    axios.get("http://localhost:8000/lista_maquina/api/maquina", {params: {id: req.query.id}})
      .then(function(maquinadata){
        res.render('atualizar_maquina', {maquina: maquinadata.data})
      })
      .catch(err => {
        res.send(err);
      })
})



router.get('/api/maquina', maquina_controller.find);
//router.get('/api/maquina', maquina_controller.findAll);
//router.get('/api/maquina/:id', maquina_controller.findOne);
router.put('/api/maquina/:id', maquina_controller.update);
router.delete('/api/maquina/:id', maquina_controller.delete);

module.exports = router;