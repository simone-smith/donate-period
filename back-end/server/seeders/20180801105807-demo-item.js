'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Items', [{
        itemName: 'Bicycle',
        itemDescription: 'Please donate so that we can provide bicycles as a form of transportation. For someone struggling to make ends meet, a reliable bicycle can provide a free and fast commute to work.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/bicycle.png",
        itemPrice: 100.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Blanket',
        itemDescription: 'Consider donating warm blankets for those living without regular or guaranteed access to heat.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/blanket.png",
        itemPrice: 25.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Clothes',
        itemDescription: 'Donate clothes to people who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/clothes.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Socks',
        itemDescription: 'Help people keep their feet warm and dry by donating socks for those who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/women-socks.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Stationery',
        itemDescription: 'Help give kids the best chance to succeed at school by donating stationery and school supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/pencil-case.png",
        itemPrice: 8.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2201
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2116
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2116
      },
      {
        itemName: 'Toothbrush',
        itemDescription: 'Help people in need to take care of their teeth by donating dental supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toothbrush.png",
        itemPrice: 2.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2116
      },
      {
        itemName: 'Toothpaste',
        itemDescription: 'Help people in need to take care of their teeth by donating dental supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toothpaste.png",
        itemPrice: 1.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2116
      },
      {
        itemName: 'Shampoo',
        itemDescription: 'Many of us take bathroom products for granted. Help people without regular shelter to stay clean, and donate new products such as shampoo, shower gel and deodorant.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/shampoo.png",
        itemPrice: 5.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2116
      },
      {
        itemName: 'Clothes',
        itemDescription: 'Donate clothes to people who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/clothes.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2357
      },
      {
        itemName: 'Shoes',
        itemDescription: 'Help people to get by on their own two feet.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/sneaker.png",
        itemPrice: 50.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2357
      },
      {
        itemName: 'Dental floss',
        itemDescription: 'Help people in need to take care of their teeth by donating dental supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/dental-floss.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2357
      },
      {
        itemName: 'Shampoo',
        itemDescription: 'Many of us take bathroom products for granted. Help people without regular shelter to stay clean, and donate new products such as shampoo, shower gel and deodorant.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/shampoo.png",
        itemPrice: 5.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2357
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2357
      },
      {
        itemName: 'Phone',
        itemDescription: 'Help people stay in touch by donating mobile phones.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/smartphone-call.png",
        itemPrice: 30.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 183092
      },
      {
        itemName: 'Shoes',
        itemDescription: 'Help people to get by on their own two feet.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/sneaker.png",
        itemPrice: 50.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 183092
      },
      {
        itemName: 'Clothes',
        itemDescription: 'Donate clothes to people who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/clothes.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 183092
      },
      {
        itemName: 'Socks',
        itemDescription: 'Help people keep their feet warm and dry by donating socks for those who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/women-socks.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 183092
      },
      {
        itemName: 'Plasters',
        itemDescription: 'First aid items are often needed by people impacted by homelessness. Make them more easily accessible by donating new and unused essentials.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/plaster.png",
        itemPrice: 4.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 183092
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 183092
      },
      {
        itemName: 'Plasters',
        itemDescription: 'First aid items are often needed by people impacted by homelessness. Make them more easily accessible by donating new and unused essentials.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/plaster.png",
        itemPrice: 4.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 300
      },
      {
        itemName: 'Shampoo',
        itemDescription: 'Many of us take bathroom products for granted. Help people without regular shelter to stay clean, and donate new products such as shampoo, shower gel and deodorant.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/shampoo.png",
        itemPrice: 5.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 300
      },
      {
        itemName: 'Blanket',
        itemDescription: 'Consider donating warm blankets for those living without regular or guaranteed access to heat.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/blanket.png",
        itemPrice: 25.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 300
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 300
      },
      {
        itemName: 'Tampons',
        itemDescription: 'Period necessities are an expensive, unavoidable monthly cost for many families, and no one should ever have to worry about access to feminine hygiene.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/tampon.png",
        itemPrice: 5.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 300
      },
      {
        itemName: 'Bicycle',
        itemDescription: 'Please donate so that we can provide bicycles as a form of transportation. For someone struggling to make ends meet, a reliable bicycle can provide a free and fast commute to work.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/bicycle.png",
        itemPrice: 100.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 184242
      },
      {
        itemName: 'Toothbrush',
        itemDescription: 'Help people in need to take care of their teeth by donating dental supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toothbrush.png",
        itemPrice: 2.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 184242
      },
      {
        itemName: 'Toothpaste',
        itemDescription: 'Help people in need to take care of their teeth by donating dental supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toothpaste.png",
        itemPrice: 1.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 184242
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 184242
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 184242
      },
      {
        itemName: 'Stationery',
        itemDescription: 'Help give kids the best chance to succeed at school by donating stationery and school supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/pencil-case.png",
        itemPrice: 8.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 184242
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Stationery',
        itemDescription: 'Help give kids the best chance to succeed at school by donating stationery and school supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/pencil-case.png",
        itemPrice: 8.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Plasters',
        itemDescription: 'First aid items are often needed by people impacted by homelessness. Make them more easily accessible by donating new and unused essentials.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/plaster.png",
        itemPrice: 4.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Clothes',
        itemDescription: 'Donate clothes to people who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/clothes.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Socks',
        itemDescription: 'Help people keep their feet warm and dry by donating socks for those who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/women-socks.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Tampons',
        itemDescription: 'Period necessities are an expensive, unavoidable monthly cost for many families, and no one should ever have to worry about access to feminine hygiene.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/tampon.png",
        itemPrice: 5.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 2157
      },
      {
        itemName: 'Socks',
        itemDescription: 'Help people keep their feet warm and dry by donating socks for those who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/women-socks.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 19172
      },
      {
        itemName: 'Tampons',
        itemDescription: 'Period necessities are an expensive, unavoidable monthly cost for many families, and no one should ever have to worry about access to feminine hygiene.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/tampon.png",
        itemPrice: 5.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 19172
      },
      {
        itemName: 'Bicycle',
        itemDescription: 'Please donate so that we can provide bicycles as a form of transportation. For someone struggling to make ends meet, a reliable bicycle can provide a free and fast commute to work.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/bicycle.png",
        itemPrice: 100.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 19172
      },
      {
        itemName: 'Blanket',
        itemDescription: 'Consider donating warm blankets for those living without regular or guaranteed access to heat.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/blanket.png",
        itemPrice: 25.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 19172
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 254
      },
      {
        itemName: 'Blanket',
        itemDescription: 'Consider donating warm blankets for those living without regular or guaranteed access to heat.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/blanket.png",
        itemPrice: 25.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 254
      },
      {
        itemName: 'Plasters',
        itemDescription: 'First aid items are often needed by people impacted by homelessness. Make them more easily accessible by donating new and unused essentials.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/plaster.png",
        itemPrice: 4.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 254
      },
      {
        itemName: 'Stationery',
        itemDescription: 'Help give kids the best chance to succeed at school by donating stationery and school supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/pencil-case.png",
        itemPrice: 8.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 254
      },
      {
        itemName: 'Stationery',
        itemDescription: 'Help give kids the best chance to succeed at school by donating stationery and school supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/pencil-case.png",
        itemPrice: 8.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 11233
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you are guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 11233
      },
      {
        itemName: 'Plasters',
        itemDescription: 'First aid items are often needed by people impacted by homelessness. Make them more easily accessible by donating new and unused essentials.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/plaster.png",
        itemPrice: 4.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 11233
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 11233
      },
      {
        itemName: 'Clothes',
        itemDescription: 'Donate clothes to people who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/clothes.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 130521
      },
      {
        itemName: 'Socks',
        itemDescription: 'Help people keep their feet warm and dry by donating socks for those who can’t afford to buy their own.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/women-socks.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 130521
      },
      {
        itemName: 'Stationery',
        itemDescription: 'Help give kids the best chance to succeed at school by donating stationery and school supplies.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/pencil-case.png",
        itemPrice: 8.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 130521
      },
      {
        itemName: 'Toilet paper',
        itemDescription: 'Toilet paper is in constant need, so if you can donate some you will be guaranteed to make a difference.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/toilet-paper.png",
        itemPrice: 3.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 130521
      },
      {
        itemName: 'Bicycle',
        itemDescription: 'Please donate so that we can provide bicycles as a form of transportation. For someone struggling to make ends meet, a reliable bicycle can provide a free and fast commute to work.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/bicycle.png",
        itemPrice: 100.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 50
      },
      {
        itemName: 'Blanket',
        itemDescription: 'Consider donating warm blankets for those living without regular or guaranteed access to heat.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/blanket.png",
        itemPrice: 25.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 50
      },
      {
        itemName: 'Books',
        itemDescription: 'Give people the chance to escape into other worlds.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/open-magazine.png",
        itemPrice: 10.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 50
      },
      {
        itemName: 'Plasters',
        itemDescription: 'First aid items are often needed by people impacted by homelessness. Make them more easily accessible by donating new and unused essentials.',
        itemImage: "https://s3.eu-west-2.amazonaws.com/donate-period/plaster.png",
        itemPrice: 4.00,
        createdAt: '2018-08-01 12:10:02',
        updatedAt: '2018-08-01 12:10:02',
        justGivingCharityId: 50
      }],
    {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Items', null, {});
  }
};
