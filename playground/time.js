
//Jan 1st 1970 00:00:00 === timestamp 0
const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var createdAt = new Date().getTime();
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY h:mm a'));
