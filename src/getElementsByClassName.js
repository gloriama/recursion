// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var contains = function(list, item) {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === item) {
        return true;
      }
    }
    return false;
  }
  var results = [];
  var parent = document.body;
  if (contains(parent.classList, className)) {
    results.push(parent);
  }
  return results;
};
