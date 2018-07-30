'use strict';
module.exports = (sequelize, DataTypes) => {
  var Charity = sequelize.define('Charity', {
    name: DataTypes.STRING
  }, {});
  Charity.associate = function(models) {
    Charity.hasMany(models.Item, {
      foreignKey: 'charityId',
    });
  };
  return Charity;
};
