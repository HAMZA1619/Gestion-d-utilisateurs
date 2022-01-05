module.exports = (sequelize, DataTypes) => {
  const Departement = sequelize.define('Departement', {   
    nomDepartement: DataTypes.STRING,
    description: DataTypes.STRING,

  });
  Departement.associate = function(models) {
    Departement.hasMany(models.Utilisateur,{
        as:"utilisateur",
        foreignKey:"idDepartement"
    });
};

  return Departement;
};