var db = require('../models/index');

module.exports.create = async (req, res) =>{
    try{
        let user = await db.Users.findByPk(req.params.id)
        let review = await db.Reviews.create({
            idUser: user.idUser,
            leavingPoint: req.body.leavingPoint,
            arrivingPoint: req.body.arrivingPoint,
            transport: req.body.transport, 
            leavingHour: req.body.leavingHour,
            length: req.body.length,
            levelOfCrowd: req.body.levelOfCrowd,
            notes: req.body.notes,
            satisfaction: req.body.satisfaction
        })
        res.status(201).send(review)
    } catch(e){
        console.log(e)
        res.status(500).send('Internal server error')
    }
}

module.exports.modify = (req, res) => {
    
}

module.exports.listAllByIdUser = (req, res) => {
    
}

module.exports.findOne = (req, res) => {

}

module.exports.findAll = (req, res) => {
    db.Reviews.findAll().then(
        (results) => {
            res.status(200).send({
                results: results
            });
        }
    ).catch((e)=>{
        res.status(500).send({
            status: "error"
        })
        console.log(e)
    })
}