const express = require('express');
const router = express.Router();
const user = require('../model/user.js');
const bcrypt = require('bcryptjs');


router.post('/signup', (req, res) => {
    var uuid = require('uuid');

    const _email = req.body.email;
    const _nome = req.body.nome;
    const _password = req.body.password;

    user.create({
        uid: uuid.v1(),
        email: _email,
        nome: _nome,
        password: _password
    }).then(() => {
        console.log('Conta criada com sucesso!')
        res.status(201).send()
    }).catch((error) => {
        console.log('Ocorreu algum erro.')
        res.status(400).send(error)

    })

});


router.put('/note', async (req, res) => {
    await user.update({
        note: req.body.note,
    },
        {
            where: {
                uid: req.body.id
            }
        }
    )
        .then(data => {
            res.json({ sucess: true, data: data });
        })
        .catch(err => {
            res.json({ sucess: false, message: err });
        });
});


router.get('/signin', async (req, res) => {
    await user.findOne({
        where: {
            uid: req.body.id,
            password: req.body.password
        }
    })
        .then(data => {
            res.json({ sucess: true, data: data });
        })
        .catch(err => {
            res.json({ sucess: false, message: err });
        });
});

module.exports = router;

