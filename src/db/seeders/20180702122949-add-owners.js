module.exports = {
  up: queryInterface => queryInterface.bulkInsert('owners', [
    {
      name: 'Captain America',
      living_space_type: 'apartment',
      age: 135,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Iron Man',
      living_space_type: 'mansion',
      age: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Black Widow',
      living_space_type: 'apartment',
      age: 32,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The Hulk',
      living_space_type: 'duplex',
      age: 42,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Thor',
      living_space_type: 'apartment',
      age: 1200,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('owners', null, {})
};
