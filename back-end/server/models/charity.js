'use strict';
module.exports = (sequelize, DataTypes) => {
  var Charity = sequelize.define('Charity', {
    name: DataTypes.STRING
  }, {});
  Charity.associate = function(models) {
    Charity.belongsToMany(models.Item, {through: 'CharityItem', foreignKey: 'itemId'});
  };
  return Charity;
};
