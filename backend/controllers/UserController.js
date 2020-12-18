var db = require('../models/index');

module.exports.create = async (req, res) => {
    try {
        let user = await db.Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.status(201).send(user)
    } catch (e) {
        console.log(e)
        res.status(500).send('Internal server error')
    }
}

module.exports.resetPass = async (req, res) => {
    let user = await db.Users.findByPk(req.params.id)

    if (req.body.password !== user.password) {
        return res.status(400).send('Wrong password')
    } else {
        await db.Users.update({

            password: req.body.newPassword
        }, {
            where: {
                idUser: user.idUser
            }
        })
        .then(res.status(200).send('Password changed'))
        .catch(e => res.status(500).send('Internal server error'))
    }
}