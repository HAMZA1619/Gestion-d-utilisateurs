const express = require('express')
const app = express()
const db = require("./models")
const { Departement , Utilisateur} = require("./models")

app.get('/add',(req,res)=>{
    Departement.create({
        nomDepartement: "helllll",
        description: "yooooooooo",

    })
    Utilisateur.create({
        nomComplet: "helllll",
        email: "yooooooooo",
        password: "lllllllllll",
        idDepartement : 1
    })
    res.send('addddddddddddddddd')
})

db.sequelize.sync().then((req)=> {
    app.listen(3000, () => {
        console.log(` listening `)
      })})
