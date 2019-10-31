module.exports = function(sequelize, DataTypes) {
    var Manatee = sequelize.define('Manatee', {
        name:DataTypes.STRING
    });

    Manatee.associate = function(models) {
        // add associations here
        Manatee.belongsTo(models.User);
    };

    return Manatee;
};