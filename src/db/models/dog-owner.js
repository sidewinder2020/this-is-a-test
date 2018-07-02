import { BOOLEAN, INTEGER } from 'sequelize';
import sequelize from '../index';

const DogOwner = sequelize.define('dogs-owners',
  {
    dog_id: INTEGER,
    owner_id: INTEGER,
    adoption: BOOLEAN,
    level_of_happiness: INTEGER
  },
  {
    timestamps: true,
    underscore: true
  },
);

export default DogOwner;
