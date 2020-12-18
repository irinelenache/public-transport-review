const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;

// Create and Save a new Review
exports.create = (req, res) => {
  //Validate the request
  if (!req.body.busNumber) {
      res.status(400).send({
          message: "Content cannot be empty!"
      });
      return;
  }

   // Create a Review
   const review = {
    busNumber: req.body.busNumber,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Review in the database
  Review.create(review)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Review."
      });
    });
};

// Retrieve all Reviews from the database.
exports.findAll = (req, res) => {
    const busNumber = req.query.busNumber;
    var condition = busNumber ? { busNumber: { [Op.like]: `%${busNumber}%` } } : null;
  
    Review.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews."
        });
      });
  };

// Find a single Review with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Review.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Review with id=" + id
        });
      });
  };

// Update a Review by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Review.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Review was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Review with id=${id}. Maybe Review was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Review with id=" + id
        });
      });
  };

// Delete a Review with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Review.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Review was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Review with id=${id}. Maybe Review was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Review with id=" + id
        });
      });
  };

// Delete all Reviews from the database.
exports.deleteAll = (req, res) => {
    exports.deleteAll = (req, res) => {
        Review.destroy({
          where: {},
          truncate: false
        })
          .then(nums => {
            res.send({ message: `${nums} Reviews were deleted successfully!` });
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while removing all reviews."
            });
          });
      };
};

// Find all published Reviews
exports.findAllPublished = (req, res) => {
    Review.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving reviews."
        });
      });
  };