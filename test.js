'use strict';

let formatJson = require('./index');

var user = {
  id: 1,
  name: 'fengliner',
  color: {
    id: 1,
    name: 'fengliner'
  },
  font: [{id: 1, name: 'fengliner'}]
};

console.log(formatJson(user, 2));
console.log(formatJson(user, 4));
