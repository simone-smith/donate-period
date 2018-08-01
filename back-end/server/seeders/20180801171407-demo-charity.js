'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Charities', [{
      name: "Alzheimer's Society",
      justGivingCharityId: 2201,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    },
    {
      name: "Macmillan Cancer Support",
      justGivingCharityId: 2116,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    },
    {
      name: "Cancer Research UK",
      justGivingCharityId: 2357,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    },
    {
      name: "British Heart Foundation",
      justGivingCharityId: 183092,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    },
    {
      name: "Mind - The Mental Health Charity",
      justGivingCharityId: 300,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    },
    {
      name: "Little Princess Trust",
      justGivingCharityId: 184242,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    },
    {
      name: "Prostate Cancer UK",
      justGivingCharityId: 2157,
      createdAt: '2018-08-01 12:10:02',
      updatedAt: '2018-08-01 12:10:02',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Charity', null, {});
  }
};
