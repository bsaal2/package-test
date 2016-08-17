import { composeWithTracker } from 'react-komposer';
import fruits from '../../both/collection.js';
import Home from './../home.jsx';

function composer(props,onData){
console.log("Start");
const subscription=Meteor.subscribe('getFruits');

 if(subscription.ready()){
 var data=fruits.find().fetch();
 console.log(data);
 onData(null,{data});
 }

};

export default composeWithTracker(composer)(Home);
