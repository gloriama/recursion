// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, parent) {
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
  var parent = parent || document.body;
  if (parent.classList && contains(parent.classList, className)) {
    results.push(parent);
  }
  var i;
  for (i = 0; i < parent.childNodes.length; i++) {
    var child = parent.childNodes[i];
    results = results.concat(getElementsByClassName(className, child));
  }
  return results;
};
