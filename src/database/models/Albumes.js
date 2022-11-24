module.exports = (sequelize, dataTypes) => {
    let alias = "Albumes";

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
        duracion: {
            type: dataTypes.BIGINT(11),
            allowNull: true,
            defaultValue: 1,
        },
    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Albumes = sequelize.define(alias, cols, config);

    Albumes.associate = function(models) {
        Albumes.hasMany(models.Canciones, {
            as: "canciones",
            foreignKey: "album_id",
            otherKey: "id",
        });
    };

    return Albumes;
};