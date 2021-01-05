var db = require('../models/index');

module.exports.create = async (req, res) => {
    try {
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
    } catch (e) {
        console.log(e)
        res.status(500).send('Internal server error')
    }
}

module.exports.modify = async (req, res) => {
    let user = await db.Users.findByPk(req.params.idUser)
    let review = await db.Reviews.findByPk(req.params.idReview)

    await db.Reviews.update({
            leavingPoint: req.body.leavingPoint,
            arrivingPoint: req.body.arrivingPoint,
            transport: req.body.transport,
            leavingHour: req.body.leavingHour,
            length: req.body.length,
            levelOfCrowd: req.body.levelOfCrowd,
            notes: req.body.notes,
            satisfaction: req.body.satisfaction
        }, {
            where: {
                idUser: user.idUser,
                idReview: review.idReview
            }
        })
        .then(res.status(200).send('Review modified'))
        .catch(e => res.status(500).send('Internal server error'))
}

module.exports.listAllByIdUser = async (req, res) => {
    let user = await db.Users.findByPk(req.params.idUser)
    let reviewList = []
    await db.Reviews.findAll({
        where: {
            idUser: user.idUser
        }
    }).then(
        (results) => {
            res.status(200).send({
                status: "Reviews found",
                results: results
            });
        }
    ).catch((e) => {
        console.log(e)
        res.status(500).send({
            status: "Internal server error"
        })
    })
}

//Userul poate alege niste parametri, daca nu vrea sa ii foloseasca pe toti lasa loc liber si se cauta doar dupa unul/doi din ei
module.exports.listAllByParams = async (req, res) => {
    await db.Reviews.findAll({
        where: {
            leavingPoint: req.body.leavingPoint,
            arrivingPoint: req.body.arrivingPoint,
            transport: req.body.transport
        }
    }).then(
        (results) => {
        res.status(200).send({
            status: "Reviews found",
            results: results
        })
    }
    ).catch((e) => {
        console.log(e)
        res.status(500).send({
            status: "Internal server error"
        })
    })
}

module.exports.findAll = (req, res) => {
    db.Reviews.findAll().then(
        (results) => {
            res.status(200).send({
                results: results
            });
        }
    ).catch((e) => {
        res.status(500).send({
            status: "error"
        })
        console.log(e)
    })
}

module.exports.deleteReview = async (req, res) => {
    await db.Reviews.destroy({
        where: {
            id: req.params.id
        }
    }).then(res.status(201).send({
        message: "Review deleted"
    }))
}