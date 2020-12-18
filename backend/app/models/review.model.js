module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
      busNumber: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Review;
  };