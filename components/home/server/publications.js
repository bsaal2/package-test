import fruits from '../both/collection.js';

Meteor.publish('getFruits',function(){
  return fruits.find();
});
