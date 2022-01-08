'use strict';
module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateur', {
    nomComplet: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return Utilisateur;
};