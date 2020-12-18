module.exports = function (sequelize, DataTypes) {
    var Reviews = sequelize.define("reviews", {
        idReview:{
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        idUser: DataTypes.STRING,
        leavingPoint: DataTypes.STRING,
        arrivingPoint: DataTypes.STRING,
        transport: DataTypes.STRING, //something like 133 autobuz, 41 tramvai
        leavingHour: DataTypes.STRING,
        length: DataTypes.INTEGER,
        levelOfCrowd: DataTypes.INTEGER,
        notes: DataTypes.STRING,
        satisfaction: DataTypes.INTEGER
    });
    return Reviews
}