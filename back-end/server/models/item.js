'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    product: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Item.associate = function(models) {
    Item.belongsToMany(models.Charity, {through: 'CharityItem', foreignKey: 'charityId'});
  };
  return Item;
};
