import fruits from '../both/collection.js';

Meteor.methods({
  'addFruit':function(fruit){
    fruits.insert({name:fruit});
  },

});
