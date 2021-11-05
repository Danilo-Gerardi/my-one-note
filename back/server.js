const express = require('express');
const app = express();
const session = require('express-session');
const connection = require('./app/database/database');


// Sessions
app.use(session({
    secret: 'mon',
    cookie: {
        maxAge: 1200000,
    },
    resave: false,
    saveUninitialized: false
}));


// Banco de Dados
connection
    .authenticate()
    .then(() => {
        console.log('Conexão feita com sucesso!');
    })
    .catch(erro => {
        console.log('Problemas na conexão');
        console.log(erro);
    });

// Parser de formulários
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Models
const User = require('./app/model/user.js');



// Controller
const userController = require('./app/controller/userController.js');

// Rotas
app.get('/', (req, res) => {
    res.render('Hello World');
});

// Rotas externas
app.use('/', userController);

app.listen(8080, () => {
    console.log('O servidor está ativo');
});



