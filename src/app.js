const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const path = require('path')
const connection = require('./config/db')



const app = express()
connection()



app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))


const authRoutes = require('./routes/authRoutes')

app.use('/', authRoutes)





app.listen(8081, () => console.log(`Servidor rodando na porta 8080`))