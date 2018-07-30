'use strict';
module.exports = (sequelize, DataTypes) => {
  var Charity = sequelize.define('Charity', {
    name: DataTypes.STRING,
    justGivingCharityId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {});
  Charity.associate = function(models) {
    Charity.hasMany(models.Item, {
      foreignKey: 'justGivingCharityId',
    });
  };
  return Charity;
};
