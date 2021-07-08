const express = require('express')
const router = express.Router()
const { sequelize } = require('../models/Db');
const { route } = require('./viatura');
const controller = require('../controller/controller')
const axios = require('axios');
const Viatura = require('../models/Viatura');

router.get('/lista_viatura', function(req, res, next){
    axios.get('http://localhost:8000/lista_viatura/api/viatura')
        .then(function(response){
            res.render('lista_viatura', {viatura: response.data});
        })
        .catch(err=>{
            res.send(err);
        })
    
} );

router.get('/atualizar_viatura', (req, res) => {
  axios.get('http://localhost:8000/lista_viatura/api/viatura',{params:{id:req.query.id}})
    .then(function(viaturadata){
      res.render('atualizar_viatura', {viatura: viaturadata.data})
    })
    .catch(err=>{
      res.send(err);
    })
  
})
/*
router.get('/delete', function (req,res) { 
  
  sequelize.query("DELETE FROM 'viatura' WHERE id = ?",  [id], (err, rows) =>{
    res.redirect('/lista_viatura')
  })  
  /* 
  Viatura.destroy({
      where: {
          id: req.params.id
      }
  })
  .then(function (deletedRecord) {
      if(deletedRecord === 1){
          res.status(200).json({message:"Deleted successfully"});          
      }
      else
      {
          res.status(404).json({message:"record not found"})
      }
  })
  .catch(function (error){
      res.status(500).json(error);
  });
  
  
});*/

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


router.get('/api/viatura', controller.find)
router.put('/api/viatura/:id', controller.update);
router.delete('/api/viatura/:id', controller.delete);
//router.get('/delete/:id', controller.delete);

module.exports = router;