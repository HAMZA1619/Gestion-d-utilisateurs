
module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateur', {
    nomComplet: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  Utilisateur.associate = function(models) {
    Utilisateur.belongsTo(models.Departement,{
     as:'departements',
     foreignKey:'idDepartement'
    });
  };

  return Utilisateur;
};