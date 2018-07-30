'use strict';
module.exports = (sequelize, DataTypes) => {
  var CharityItem = sequelize.define('CharityItem', {
    charityId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER
  }, {});
  CharityItem.associate = function(models) {
    // associations can be defined here
  };
  return CharityItem;
};