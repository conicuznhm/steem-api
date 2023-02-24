module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false,
        },
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: false,
        },
      },
    },
    { underscored: true, paranoid: true },
  );

  Movie.associate = (db) => {
    Movie.belongsTo(db.Game, {
      foreignKey: {
        name: "gameId",
        allowNull: false,
      },
    });
  };

  // Movie.associate = (db) => {
  //   Movie.belongsTo(db.Game, {
  //     foreignKey: {
  //       name: "gameId",
  //       allowNull: false,
  //     },
  //   });
  // };

  return Movie;
};