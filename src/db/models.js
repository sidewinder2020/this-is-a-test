import Dog from './models/dog';
import Owner from './models/owner';
import DogOwner from './models/dog-owner';

DogOwner.belongsTo(Dog);
DogOwner.belongsTo(Owner);

Dog.hasMany(DogOwner, { as: 'dog_dogowners', foreignKey: 'dog_id' });
Owner.hasMany(DogOwner, { as: 'owner_dogowners', foreignKey: 'owner_id' });

Dog.belongsToMany(Owner, { as: 'dogs', through: DogOwner, foreignKey: 'dog_id' });
Owner.belongsToMany(Dog, { as: 'owners', through: DogOwner, foreignKey: 'owner_id' });

export {
  Dog,
  Owner,
  DogOwner
};
