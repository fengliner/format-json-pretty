# format-json

format object to json

## INSTALL

  npm install format-json

## TEST

  npm run test

## DEMO

```js
var formatJson = require('format-json');

var user = {
  id: 1,
  name: 'fengliner',
  color: {
    id: 1,
    name: 'fengliner'
  },
  font: [{id: 1, name: 'fengliner'}]
};

console.log(formatJson(user));

/**
{
  "id": 1,
  "name": "fengliner",
  "color": {
    "id": 1,
    "name": "fengliner"
  },
  "font": [{
    "id": 1,
    "name": "fengliner"
  }]
}
 */
```
