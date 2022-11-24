module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Generos = sequelize.define(alias, cols, config);

    Generos.associate = function(models) {
        Generos.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "genero_id",
            otherKey: "id",
        });
    };

    return Generos;
};