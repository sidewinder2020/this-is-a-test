'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Sequelize = require('sequelize');
var sequelize = new Sequelize('stuff', 'Joni', 'macrules69', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

exports.default = sequelize;