'use strict';

let formatJson = function(obj, space, num) {
  space = space || 2;
  num = num || space;
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
      target += `${formatArray(value, space, num)}`;
    }
    else if (value instanceof Object) {
      target += `${formatJson(value, space + num, num)}`;
    }
    else {
      target += `${value}`
    }
    if (i !== keys.length - 1) {
      target += ',\n'
    }
  }
  let blank = ''
  for (let i = 0; i < space - num; i++) {
    blank += ' ';
  }
  target += '\n' + blank + '}';
  return target;

  function formatArray(arr, space, num) {
    space = space || 2;
    num = num || space;
    let target = '[';
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        target += `"${arr[i]}"`;
      }
      else if (arr[i] instanceof Array) {
        target += `${formatArray(arr[i], space + num, num)}`;
      }
      else if (arr[i] instanceof Object) {
        target += `${formatJson(arr[i], space + num, num)}`;
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
