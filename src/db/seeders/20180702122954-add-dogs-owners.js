module.exports = {
  up: queryInterface => queryInterface.bulkInsert('dogs-owners', [
    {
      dog_id: 1,
      owner_id: 1,
      adoption: true,
      level_of_happiness: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_id: 1,
      owner_id: 3,
      adoption: true,
      level_of_happiness: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_id: 2,
      owner_id: 2,
      adoption: false,
      level_of_happiness: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_id: 3,
      owner_id: 2,
      adoption: false,
      level_of_happiness: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_id: 5,
      owner_id: 4,
      adoption: true,
      level_of_happiness: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      dog_id: 4,
      owner_id: 5,
      adoption: false,
      level_of_happiness: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('dogs-owners', null, {})
};
