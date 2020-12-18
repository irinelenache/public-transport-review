var db = require('../models/index');

module.exports.create = async (req, res) =>{
    try{
        let user = await db.Users.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
        })
        res.status(201).send(user)
    } catch(e){
        console.log(e)
        res.status(500).send('Internal server error')
    }
}

module.exports.resetPass = (req, res) => {
    
}