import { STRING, INTEGER } from 'sequelize';
import sequelize from '../index';

const Owner = sequelize.define('owners',
  {
    name: STRING,
    living_space_type: STRING,
    age: INTEGER
  },
  {
    timestamps: true,
    underscore: true
  },
);

export default Owner;
