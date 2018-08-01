'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Items', [{
        itemName: 'Bicycle',
        itemDescription: 'If you have an old bicycle in good condition, consider donating it as a form of transportation. For someone struggling to make ends meet, a reliable bicycle can provide a free and fast commute to work.',
        itemImage: "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
        itemPrice: 100.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Blanket',
        itemDescription: 'Consider donating warm blankets for those living without regular or guaranteed access to heat.',
        itemImage: "http://images.justgiving.com/image/6ad95821-1a25-43ba-8f62-05216b3fd4fc.jpg",
        itemPrice: 100.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Items', null, {});
  }
};
