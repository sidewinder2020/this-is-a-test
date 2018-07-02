module.exports = {
  up: queryInterface => queryInterface.bulkInsert('dogs', [
    {
      name: 'Fuffers',
      size: 'large',
      age: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ferfly',
      size: 'medium',
      age: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Buttercup',
      size: 'small',
      age: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Stoogy',
      size: 'large',
      age: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iggers',
      size: 'small',
      age: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('dogs', null, {})
};
