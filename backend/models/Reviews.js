module.exports = function (sequelize, DataTypes) {
    var Reviews = sequelize.define("reviews", {
        idReview: DataTypes.STRING,
        idUser: DataTypes.STRING,
        leavingPoint: DataTypes.STRING,
        arrivingPoint: DataTypes.STRING,
        transport: DataTypes.STRING, //something like 133 autobuz, 41 tramvai
        leavingHour: DataTypes.STRING,
        length: DataTypes.INTEGER,
        levelOfCrowd: DataTypes.ENUM('Gol', 'Putini oameni', 'Mediu', 'Multi oameni', 'Plin'),
        notes: DataTypes.STRING,
        satisfaction: DataTypes.INTEGER
    });
    return Reviews
}