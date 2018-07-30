'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    product: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Charity, {
      foreignKey: 'charityId',
      onDelete: 'CASCADE',
    });
  };
  return Item;
};
