module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Artistas = sequelize.define(alias, cols, config);

    Artistas.associate = function(models) {
        Artistas.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "artista_id",
            otherKey: "id",
        });
    };

    return Artistas;
};