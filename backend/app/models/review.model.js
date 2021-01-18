module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      transport: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      leavingPoint: {
        type: Sequelize.STRING
      },
      arrivingPoint: {
        type: Sequelize.STRING
      },
      leavingHour: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.INTEGER
      },
      levelOfCrowd: {
        type: Sequelize.INTEGER
      },
      satisfaction: {
        type: Sequelize.INTEGER
      }
    });
  
    return Review;
  };