'use strict';
const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const db = require("./models")
const { Departement , Utilisateur} = require("./models");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));
app.set('view engine', 'ejs')

// HOME PAGE
app.get('/' , (req,res)=>{
    Utilisateur.findAll().then((data)=>{
        Departement.findAll().then((departements)=>{
            res.render('index',{data ,url : req.url, departements})
        })   
    })
})
// USER PAGE
app.get('/utilisateur' ,(req,res)=>{
    Utilisateur.findAll().then((data)=>{
        Departement.findAll().then((departements)=>{
            res.render('utilisateur',{data ,url : req.url, departements})
        })
    })
})
// DEPARTEMENT PAGE
app.get('/departement' ,(req,res)=>{
    Departement.findAll().then((data)=>{
        res.render('departement',{data ,url : req.url})
    })
})
// USERS OF DEPARTEMENT PAGE
app.all('/departement/:id' ,(req,res)=>{
    Departement.findAll().then((departements)=>{
        Utilisateur.findAll({ where: { idDepartement : req.params.id }}).then((data)=>{
           res.render('utilisateur',{ data , url : '/utilisateur', departements , id :  req.params.id})
        
        })
    })
})
// ADD USER 
app.post('/ajouter_utilisateur',(req,res)=>{
    Utilisateur.create({
        nomComplet: req.body.nom,
        email: req.body.email,
        password: req.body.password,
        idDepartement : req.body.departement
    })
    res.redirect('/utilisateur')
    return
})

// ADD DEPARTEMENT
app.post('/ajouter_departement',(req,res)=>{
    Departement.create({
        nomDepartement: req.body.nom,
        description: req.body.description,
    })
    res.redirect('/departement')
    return
})

// DELETE USER 
app.get('/delete_utilisateur/:id',(req,res)=>{
    Utilisateur.destroy({ where: { id : req.params.id }})
    res.redirect('/utilisateur')
    return
})
// DELETE DEPARTEMENT
app.get('/delete_departement/:id',(req,res)=>{
    Departement.destroy({ where: { id : req.params.id }})
    res.redirect('/departement')
    return
})

// update USER 
app.post('/update_utilisateur/:id',(req,res)=>{
    Utilisateur.update(
        {
            nomComplet: req.body.nom,
            email: req.body.email,
            password: req.body.password,
            idDepartement : req.body.departement
        },
        { where: { id : req.params.id }}
    )
    res.redirect('/utilisateur')
    return
})
// update DEPARTEMENT
app.post('/update_departement/:id',(req,res)=>{
    Departement.update({
        nomDepartement: req.body.nom,
        description: req.body.description,
    },
    { where: { id : req.params.id }})
    res.redirect('/departement')
    return
})



app.listen(3000, () => {
    console.log(`listening`)
  })
db.sequelize.sync({force: false})

     