import { STRING, INTEGER } from 'sequelize';
import sequelize from '../index';

const Dog = sequelize.define('dogs',
  {
    name: STRING,
    size: STRING,
    age: INTEGER
  },
  {
    timestamps: true,
    underscore: true
  },
);

export default Dog;
