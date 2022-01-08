'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departement = sequelize.define('Departement', {   
    nomDepartement: DataTypes.STRING,
    description: DataTypes.TEXT,

  });
  Departement.associate = function(models) {
    Departement.hasMany(models.Utilisateur,{
        onDelete: 'cascade',
        onUpdate: 'restrict',
        as:"utilisateur",
        foreignKey:"idDepartement"
    });
};

  return Departement;
};