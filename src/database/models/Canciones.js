module.exports = (sequelize, dataTypes) => {
    let alias = "Canciones";

    let cols = {
        id: {
            type: dataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        duracion: {
            type: dataTypes.BIGINT(20),
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        genero_id: {
            type: dataTypes.BIGINT(11),
            allowNull: true,
            defaultValue: 1,
        },
        album_id: {
            type: dataTypes.BIGINT(11),
            allowNull: true,
            defaultValue: 1,
        },
        artista_id: {
            type: dataTypes.BIGINT(11),
            allowNull: true,
            defaultValue: 1,
        },

    };

    let config = {
        timestamps: false,
        deletedAt: false,
    };

    const Canciones = sequelize.define(alias, cols, config);

    Canciones.associate = function(models) {
        Canciones.belongsTo(models.Generos, {
            as: "Generos",
            foreignKey: "genero_id",
            otherKey: "id",
        });
        Canciones.belongsTo(models.Albumes, {
            as: "Albumes",
            foreignKey: "album_id",
            otherKey: "id",
        });
        Canciones.belongsTo(models.Artistas, {
            as: "Artistas",
            foreignKey: "artista_id",
            otherKey: "id",
        });
    };

    return Canciones;
};