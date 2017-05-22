'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      name: 'Tirta Wirya Putra',
      gender: 'Male',
      age: 29,
      address: 'Jl.K.H Hasyim Ashari, Cipondoh - Tangerang',
      phone:'081298230631',
      email: 'tirtawiryaputra@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Erwin',
      gender: 'Male',
      age: 33,
      address: 'Jl.Tegal Rotan, Pondok Aren - Tangerang Selatan',
      phone:'0876543212345',
      email: 'erwin_mencret_di@celana.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
