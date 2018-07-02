const Sequelize = require('sequelize');
const sequelize = new Sequelize('stuff', 'Joni', 'macrules69', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

export default sequelize;
