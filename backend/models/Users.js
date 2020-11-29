module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        idUser: DataTypes.STRING,
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Users
}