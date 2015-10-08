// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return "null";
  } else if (obj === undefined || typeof obj === "function") {
    return undefined;
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    return '[' + obj.map(function(item) {
      return stringifyJSON(item);
    }).filter(function(item) {
      return item !== undefined;
    }).join(',') + ']';
  } else if (typeof obj === "object") {
    return '{' + Object.keys(obj).map(function(key) {
      return stringifyJSON(key) && stringifyJSON(obj[key]) ?
             stringifyJSON(key) + ':' + stringifyJSON(obj[key]) :
             undefined;
    }).filter(function(item) {
      return item !== undefined;
    }).join(',') + '}';
  } else {
    return obj.toString();
  }
};
