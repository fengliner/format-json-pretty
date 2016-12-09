'use strict';

let formatJson = function(obj, space) {
  space = space || 2;
  let target = '{\n';
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    let blank = '';
    for (let i = 0; i < space; i++) {
      blank += ' ';
    }
    target += blank + `"${key}": `
    if (typeof value === 'string') {
      target += `"${value}"`
    }
    else if (value instanceof Array) {
      target += `${formatArray(value, space)}`;
    }
    else if (value instanceof Object) {
      target += `${formatJson(value, space * 2)}`;
    }
    else {
      target += `${value}`
    }
    if (i !== keys.length - 1) {
      target += ',\n'
    }
  }
  let blank = ''
  if (space != 2) {
    for (let i = 0; i < space / 2; i++) {
      blank += ' ';
    }
  }
  target += '\n' + blank + '}';
  return target;

  function formatArray(arr, sapce) {
    space = sapce || 2;
    let target = '[';
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        target += `"${arr[i]}"`;
      }
      else if (arr[i] instanceof Array) {
        target += `${formatArray(arr[i])}`;
      }
      else if (arr[i] instanceof Object) {
        target += `${formatJson(arr[i], space * 2)}`;
      }
      else {
        target += `${arr[i]}`
      }
      if (i !== arr.length - 1) {
        target += ',';
      }
    }
    target += ']';
    return target;
  };
}

module.exports = formatJson;
