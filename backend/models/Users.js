module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("users", {
        idUser: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    return Users
}