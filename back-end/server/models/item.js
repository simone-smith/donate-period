'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    itemName: DataTypes.STRING,
    itemDescription: DataTypes.STRING,
    itemImage: DataTypes.STRING,
    itemPrice: DataTypes.FLOAT
  }, {});
  Item.associate = function(models) {
    Item.belongsTo(models.Charity, {
      foreignKey: 'justGivingCharityId',
      onDelete: 'CASCADE',
    });
  };
  return Item;
};
